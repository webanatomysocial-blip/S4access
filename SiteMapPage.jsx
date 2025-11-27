// SiteMapPage.jsx
import ShowRenderedHTML from "./ShowRenderedHTML.jsx";

export default function SiteMapPage() {
  return (
    <ShowRenderedHTML
      headElements={
        <>
          <meta property="og:title" content="About Us | SAP Access Management Experts | s4access" />
        <meta
          property="og:description"
          content="s4access delivers expert SAP access management, governance & compliance solutions to mitigate risk, streamline processes and secure your enterprise systems."
        />
        <meta property="og:image" content="https://s4access.com/images/blog1-face.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="s4access – About us" />
        </>
      }
    >
      <h1>Site Map</h1>
      <p>...</p>
    </ShowRenderedHTML>
  );
}
