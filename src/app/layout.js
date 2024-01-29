import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Ibm_Plex_Sans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: {
    default: "Flourishers Edge - Savour the flavour of IT solutions ",
    template: "%s - Flourishers Edge",
  },
  description:
    "Elevate your digital presence with Flourishers Edge, a dynamic Bhopal-based startup offering bespoke web solutions and empowering new ventures in social media dominance",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={Ibm_Plex_Sans.className}>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
