"use client";

import ProjectCard, {
  ProjectCardProps,
} from "@/components/common/ProjectCard/ProjectCard";
import styles from "./projects.module.css";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { useTranslation } from "@/hooks/useTranslation";

interface SectionProps {
  id: string;
}

export default function Projects({ id }: SectionProps) {
  const { t } = useTranslation();

  const projectsData: ProjectCardProps[] = [
    {
      title: t.projects.items.embellish.title,
      description: t.projects.items.embellish.description,
      image: "/proj-rowi.webp",
      type: "web",
      techStack: "Next.js | TypeScript | Sass | Sanity CMS | Shopify",
      link: "https://embellishbyrowi.com/",
    },
    {
      title: t.projects.items.atelierMarketing.title,
      description: t.projects.items.atelierMarketing.description,
      image: "/proj-atelier-mkt.webp",
      type: "web",
      techStack: "Next.js | TypeScript | Sass",
      link: "https://atelier.co/",
    },
    {
      title: t.projects.items.bvrg.title,
      description: t.projects.items.bvrg.description,
      image: "/proj-bvrg.webp",
      type: "web",
      techStack: "Next.js | TypeScript | Zustand | Tailwind",
      link: "https://www.bvrg.com.au/",
    },
    {
      title: t.projects.items.atelierPlatform.title,
      description: t.projects.items.atelierPlatform.description,
      image: "/proj-atelier.webp",
      type: "web",
      techStack: "Next.js | TypeScript | Sass | AWS",
      link: "https://platform.atelier.co/",
    },
    {
      title: t.projects.items.starWars.title,
      description: t.projects.items.starWars.description,
      image: "/proj-star-wars.webp",
      type: "web",
      techStack: "Next.js | CSS",
      link: "https://mammoth-eight.vercel.app/",
    },
  ];

  return (
    <section id={id} className={styles.sectionWrapper}>
      <SectionHeader
        title={t.projects.title}
        subtitle={t.projects.subtitle}
        my={t.projects.my}
      />
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
