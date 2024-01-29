import React from "react";
import ProjectPage from "@/components/ProjectPage";
import { getProjects } from "@/utils/getProjects";
export const revalidate = 3600
export async function generateMetadata({ params }) {
  const productsData = await getProjects();

  const product = params.slug;
  const productInfo = productsData.find((item) => item._id === product);
  return {
    title: productInfo.title,
    desccription: productInfo.description,
    openGraph: { images: [{ url: productInfo.imageURLs[1] }] },
  };
}
// caching the pages to improve performance
export async function generateStaticParams() {
  const productsData = await getProjects();
  return productsData.map(({ _id }) => _id);
}
export default async function Page({ params }) {
  const productsData = await getProjects();

  const product = params.slug;
  const productInfo = productsData.find((item) => item._id === product);

  return (
    <main>
      <ProjectPage productInfo={productInfo} />
    </main>
  );
}
