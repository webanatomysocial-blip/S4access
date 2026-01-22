/* eslint-env node */
/* global process */

import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const isProd = process.env.NODE_ENV === 'production';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();

  if (!isProd) {
    // DEV: use Vite's middleware for HMR + SSR dev
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: 'ssr' },
      appType: 'custom'
    });

    // use vite dev middleware
    app.use(vite.middlewares);

   app.use(async (req, res) => {
  try {
    const url = req.originalUrl;
    
        // Read index.html from project root
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

        // Let Vite transform the HTML (inject HMR, etc.)
        template = await vite.transformIndexHtml(url, template);

        // load server entry on-the-fly (dev)
        const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

        // compute origin so pages can build absolute URLs
        const origin = `${req.protocol}://${req.get('host')}`;

        // render app -> html + head
        const { html, head } = await render(url, { origin });

        // debug logs so you can see what the server produced
        console.log(`[DEV server] ${req.method} ${url} -> head.meta:\n`, head.meta || '(none)');

        const headTags = `${head.title || ''}\n${head.meta || ''}\n${head.link || ''}`;

        const htmlOutput = template
          .replace('<!--ssr-head-->', headTags)
          .replace('<!--ssr-outlet-->', `<div id="root">${html}</div>`);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(htmlOutput);
  } catch (e) {
    vite.ssrFixStacktrace?.(e);
    console.error('[DEV server] SSR error:', e);
    res.status(500).end(e.stack || e.message);
  }
});

  } else {
    // PROD: serve built client and use the server bundle
    const clientDistPath = path.resolve(__dirname, 'dist', 'client');
    const serverBundlePath = path.resolve(__dirname, 'dist', 'server', 'entry-server.js');

    // serve static client assets
    app.use(express.static(clientDistPath, { index: false }));

    app.get('*', async (req, res) => {
      try {
        const url = req.originalUrl;

        // read the built index.html from client dist
        const template = fs.readFileSync(path.resolve(clientDistPath, 'index.html'), 'utf-8');

        // import the SSR render function from the built server bundle
        const { render } = await import(serverBundlePath);

        // compute origin for absolute URLs
        const origin = `${req.protocol}://${req.get('host')}`;

        // render HTML
        const { html, head } = await render(url, { origin });

        // debug log the produced meta so you can inspect OG image value
        console.log(`[PROD server] ${req.method} ${url} -> head.meta:\n`, head.meta || '(none)');

        const headTags = `${head.title || ''}\n${head.meta || ''}\n${head.link || ''}`;

        const htmlOutput = template
          .replace('<!--ssr-head-->', headTags)
          .replace('<!--ssr-outlet-->', `<div id="root">${html}</div>`);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(htmlOutput);
      } catch (err) {
        console.error('[PROD server] SSR error:', err);
        res.status(500).end(err.stack || err.message);
      }
    });
  }

  return app;
}

createServer().then((app) => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port} (NODE_ENV=${process.env.NODE_ENV || 'development'})`);
  });
});
