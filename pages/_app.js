import "../styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import { useState, useEffect } from "react";
import { Merriweather, Roboto } from "next/font/google";

const merriweather = Merriweather({
  weight: ['300','400','700','900'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

function MyApp({ Component, pageProps, router }) {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return <></>;
  }
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-TMPPWF9DWD`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TMPPWF9DWD', {
            page_path: window.location.pathname,
          });
      `}
      </Script>
      <main className={`${merriweather.variable} font-sans ${roboto.variable}`}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </main>
    </>
  );
}

export default MyApp;
