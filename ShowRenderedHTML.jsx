// ShowRenderedHTML.jsx
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import formatHTML from "./formatHTML.js";

/**
 * ShowRenderedHTML
 *
 * Props:
 * - headElements: optional React nodes that should be placed inside <head>
 * - children: nodes that will be placed inside <body>
 *
 * Usage:
 * <ShowRenderedHTML headElements={<><meta ... /><title>...</title></>}>
 *   <h1>Page</h1>
 * </ShowRenderedHTML>
 */
export default function ShowRenderedHTML({ headElements = null, children }) {
  // build the HTML string from React nodes
  const markup = renderToStaticMarkup(
    <html>
      <head>{headElements}</head>
      <body>{children}</body>
    </html>
  );

  return (
    <>
      <h1>Rendered HTML:</h1>
      <pre>{formatHTML(markup)}</pre>
    </>
  );
}
