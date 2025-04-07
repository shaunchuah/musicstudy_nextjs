import "../styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Merriweather, Roboto } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

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
