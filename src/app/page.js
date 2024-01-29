import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProductsPage from "@/components/ProductsPage";
import ServicesProvided from "@/components/ServicesProvided";
import { getProjects } from "@/utils/getProjects";
export const revalidate = 3600
export default async function Home() {
  const productsData = await getProjects();
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
