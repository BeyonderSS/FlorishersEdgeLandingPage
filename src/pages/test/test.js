import Projects from "@/components/Projects";
import { createClient } from "next-sanity";
import React from "react";

const test = ({ productsData }) => {
  return (
    <div>
      <Projects productsData={productsData} />
    </div>
  );
};

export default test;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "vxm1y89n",
    dataset: "test",
    useCdn: false,
  });

  const query = `*[_type == "projects"] {
    title,
    description,
    shortDescription,
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
