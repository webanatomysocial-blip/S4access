// src/entry-server.jsx
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './AppRoutes.jsx';
import { ServerDataContext } from './ServerDataContext.jsx';

export function render(url, context = {}) {
  const helmetContext = {};
  const app = (
    <HelmetProvider context={helmetContext}>
      <ServerDataContext.Provider value={context}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </ServerDataContext.Provider>
    </HelmetProvider>
  );

  const html = renderToString(app);
  const helmet = helmetContext.helmet || {};

  return {
    html,
    head: {
      title: helmet.title ? helmet.title.toString() : '',
      meta: helmet.meta ? helmet.meta.toString() : '',
      link: helmet.link ? helmet.link.toString() : ''
    }
  };
}

export default render;
