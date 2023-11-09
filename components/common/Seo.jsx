import Head from "next/head";
import Script from "next/script";

const Seo = ({ pageTitle, description, keywords }) => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "CannaLife",
    "description": description,
    "url": "https://cannalifenj.com/", // Updated with your website URL
    "logo": "https://cannalifenj.com/images/cannalife-icon.png", // Updated with your logo URL
  };

  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "CannaLife",
    "url": "https://cannalifenj.com/", // Updated with your website URL
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "CannaLife",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cannalifenj.com/images/cannalife-icon.png", // Updated with your logo URL
      },
    },
  };

  return (
    <>
      <Head>
        <title>
          {pageTitle && `${pageTitle} | CannaLife`}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />

        {/* Add structured data for rich results */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

        {/* Add Schema Markup */}
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Head>

      {/* Google Tag Manager scripts using Next Script */}
      <Script id="gtag-link" src="https://www.googletagmanager.com/gtag/js?id=G-40ETLJE1T6" strategy="afterInteractive" />
      <Script id="gtag-data" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-40ETLJE1T6');
        `}
      </Script>
    </>
  );
};

export default Seo;
