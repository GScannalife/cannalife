import Head from "next/head";
import Script from "next/script";

const Seo = ({ pageTitle, description, keywords }) => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "CannaLife",
    "description": description,
    "url": "https://cannalifenj.com/",
    "logo": "https://cannalifenj.com/images/cannalife-icon.png",
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
