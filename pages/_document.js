import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="w-screen absolute overflow-visible">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <body className="w-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
