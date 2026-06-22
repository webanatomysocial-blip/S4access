import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";
import '../css/App.css';
import LenisProvider from "../components/LenisProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  metadataBase: new URL('https://s4access.com'),
  title: "Leading SAP Access Management Specialists | s4access",
  description: "Welcome to s4access, your go-to solution for SAP access management!",
  openGraph: {
    title: "Leading SAP Access Management Specialists | s4access",
    description: "Welcome to s4access, your go-to solution for SAP access management!",
    url: 'https://s4access.com',
    siteName: 's4access',
    images: [
      {
        url: '/images/black-logo-400.png',
        width: 400,
        height: 400,
        alt: 's4access logo',
      },
    ],
    type: 'website',
  },
};

import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4BT5FC9');
          `}
        </Script>
        {/* Leadfeeder Tracker */}
        <Script id="leadfeeder-tracker" strategy="afterInteractive">
          {`
            (function (ss, ex) { window.ldfdr = window.ldfdr || function () { (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments)); }; (function (d, s) { fs = d.getElementsByTagName(s)[0]; function ce(src) { var cs = d.createElement(s); cs.src = src; cs.async = 1; fs.parentNode.insertBefore(cs, fs); }; ce('https://sc.lfeeder.com/lftracker_v1_' + ss + (ex ? '_' + ex : '') + '.js'); })(document, 'script'); })('ywVkO4XxWwz4Z6Bj');
          `}
        </Script>
        {/* HubSpot Embed Code */}
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/148109206.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4BT5FC9" 
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <LenisProvider>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
