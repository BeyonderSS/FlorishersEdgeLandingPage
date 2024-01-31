import { cache } from "react";
import { createClient } from "next-sanity";

// sanity clientt insitialisation
const client = createClient({
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: process.env.SANITY_API_VERSION,
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
