import { MetadataRoute } from "next";

//tells search engines which pages they can/cannot crawl
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // All search engines
      allow: "/", // Can crawl everything
    },
    sitemap: "https://rafaelmingossi.dev/sitemap.xml",
  };
}
