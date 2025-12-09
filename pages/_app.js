import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  const siteTitle = "IAC - Insight Accounting & Consultant";
  const siteDescription = "شريكك المالي الأول. نقدم خدمات المحاسبة، الضرائب، المراجعة، وتأسيس الشركات في مصر بأعلى معايير الجودة.";
  const siteUrl = "https://www.iacegy.com";

  return (
    <>
      <Head>
        <title> IAC - Insight Accounting & Consultant</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="keywords" content="محاسبة, ضرائب, مراجعة, استشارات مالية, تأسيس شركات, مصر, IAC" />
        <meta name="author" content="IAC" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:site_name" content="IAC" />

        {/* صورة اللينك */}
        {/* <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}

        {/* تويتر */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        {/* <meta name="twitter:image" content={`${siteUrl}/og-image.png`} /> */}

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp


