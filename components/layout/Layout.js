import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          MUSIC IBD Study
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta
          name="description"
          content="MARVEL IBD Study. Randomised controlled trial investigating the use of mitochondrial antioxidants as a treatment for ulcerative colitis."></meta>
      </Head>
      <div className="flex flex-col text-gray-100 bg-primary min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
