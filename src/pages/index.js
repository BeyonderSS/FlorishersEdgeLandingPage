import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesProvided from "@/components/ServicesProvided";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <ServicesProvided />
      <Footer />
    </div>
  );
}
