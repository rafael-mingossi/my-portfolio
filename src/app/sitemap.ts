import { MetadataRoute } from "next";

//tells search engines about all pages available
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rafaelmingossi.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
