//helps search engines understand your content better, about the structure
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person", // Tells Google this is about a person
    name: "Rafael Mingossi",
    jobTitle: "Front-End Developer",
    url: "https://rafaelmingossi.dev",
    sameAs: [
      "https://github.com/rafael-mingossi",
      "https://linkedin.com/in/rafaelmingossi",
    ],
    knowsAbout: ["JavaScript", "React", "Next.js"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
