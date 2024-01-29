import Projects from "@/components/Projects";
import { getProjects } from "@/utils/getProjects";
import { createClient } from "next-sanity";
import React from "react";
export const metadata = {
  title: "Our Projects",
};
export const revalidate = 3600
async function projects() {
  const productsData = await getProjects();
  return (
    <div>
      <Projects productsData={productsData} />
    </div>
  );
}

export default projects;
