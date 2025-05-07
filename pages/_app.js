import "../styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Merriweather, Roboto } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

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
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#264653" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className={`${merriweather.variable} font-sans ${roboto.variable}`}>
        <Layout>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </main>
      <Analytics />
    </>
  );
}

export default MyApp;
