import "@/styles/globals.css";
import {IBM_Plex_Sans } from "next/font/google";

const Ibm_Plex_Sans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={Ibm_Plex_Sans.className}>
      <Component {...pageProps} />
    </main>
  );
}
