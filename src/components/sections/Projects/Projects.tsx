import ProjectCard, {
  ProjectCardProps,
} from "@/components/common/ProjectCard/ProjectCard";
import styles from "./projects.module.css";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

interface SectionProps {
  id: string;
}

const projectsData: ProjectCardProps[] = [
  {
    title: "Embellish by Rowi",
    description:
      "This project is from one of the customers from my previous job at Atelier. She wanted an e-commerce to sell her products.",
    image: "/proj-rowi.webp",
    type: "web",
    techStack: "Next.js | TypeScript | Sass | Sanity CMS | Shopify",
    link: "https://embellishbyrowi.com/",
  },
  {
    title: "Atelier Marketing app",
    description:
      "This is the Marketing app that I worked on my previous job at Atelier",
    image: "/proj-atelier-mkt.webp",
    type: "web",
    techStack: "Next.js | TypeScript | Sass",
    link: "https://atelier.co/",
  },
  {
    title: "Bvrg",
    description:
      "I worked as a freelancer to help with the system design on this app",
    image: "/proj-bvrg.webp",
    type: "web",
    techStack: "Next.js | TypeScript | Zustand | Tailwind",
    link: "https://www.bvrg.com.au/",
  },
  {
    title: "Atelier Platform",
    description:
      "This is the main platform from my previous job at Atelier, it is currently in Beta for selected customers only",
    image: "/proj-atelier.webp",
    type: "web",
    techStack: "Next.js | TypeScript | Sass | AWS",
    link: "https://platform.atelier.co/",
  },
  {
    title: "Star Wars",
    description:
      "This is a personal project containing the Star Wars API and some cool JavaScript from a long time ago.",
    image: "/proj-star-wars.webp",
    type: "web",
    techStack: "Next.js | CSS",
    link: "https://mammoth-eight.vercel.app/",
  },
];

export default function Projects({ id }: SectionProps) {
  return (
    <section id={id} className={styles.sectionWrapper}>
      <SectionHeader title="PROJECTS" subtitle="completed work" />
      <div className={styles.cardsWrapper}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            type={project.type}
            image={project.image}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
