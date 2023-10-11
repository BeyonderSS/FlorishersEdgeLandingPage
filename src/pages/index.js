import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesProvided from "@/components/ServicesProvided";
import { Inter } from "next/font/google";
import { createClient } from "next-sanity";
import Projects from "@/components/Projects";
import ProductsPage from "@/components/ProductsPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ productsData }) {
  return (
    <div className="overflow-x-hidden">
      <section id="Hero">
        <Hero />
      </section>
      <section id="Features">
        <Features />
      </section>
      <section id="Projects">
        <ProductsPage productsData={productsData} />
      </section>
      <section id="ServicesProvided">
        <ServicesProvided />
      </section>
    </div>
  );
}
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "vxm1y89n",
    dataset: "test",
    useCdn: false,
  });

  const query = `*[_type == "projects"] {
    title,
    description,    shortDescription,

    "imageURLs": mockups[].asset->url,
    link,
    _id
  }
  `;

  const productsData = await client.fetch(query);

  return {
    props: {
      productsData,
    },
  };
}
