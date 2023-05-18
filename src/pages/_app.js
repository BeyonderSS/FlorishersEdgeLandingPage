import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import Head from "next/head";

const Ibm_Plex_Sans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={Ibm_Plex_Sans.className}>
      <Head>

      <link rel="shortcut icon" href="/favicon.png" />
        <title>Flourishers Edge</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
