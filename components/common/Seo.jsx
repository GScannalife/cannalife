import Head from "next/head";

const Seo = ({ pageTitle, description, keywords }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} | CannaLife`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
    </Head>
  </>
);

export default Seo;