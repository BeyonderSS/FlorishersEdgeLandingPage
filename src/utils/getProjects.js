import { cache } from "react";
import { createClient } from "next-sanity";

// sanity clientt insitialisation
const client = createClient({
  projectId: "vxm1y89n",
  dataset: "test",
  useCdn: false,
  apiVersion: "2021-10-21",
});
// caching data to avoid multiple calls
export const getProjects = cache(async () => {
  const query = `*[_type == "projects"] {
          title,
          description,
          "imageURLs": mockups[].asset->url,
          link,
          _id,
          shortDescription
        }
        `;

  const productsData = await client.fetch(query);
  return productsData;
});
