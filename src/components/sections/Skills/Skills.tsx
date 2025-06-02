"use client";

import styles from "./skills.module.css";
import JavaScriptIcon from "@/components/common/icons/JavaScriptIcon";
import NextJsIcon from "@/components/common/icons/NextJsIcon";
import CssIcon from "@/components/common/icons/CssIcon";
import JestIcon from "@/components/common/icons/JestIcon";
import ReactIcon from "@/components/common/icons/ReactIcon";
import TypeScriptIcon from "@/components/common/icons/TypeScriptIcon";
import SassIcon from "@/components/common/icons/SassIcon";
import PostgresSqlIcon from "@/components/common/icons/PostgresSqlIcon";
import TailwindIcon from "@/components/common/icons/TailwindIcon";
import SkillCard from "@/components/common/SkillCard/SkillCard";
import HtmlIcon from "@/components/common/icons/HtmlIcon";
import GitHubIcon from "@/components/common/icons/GitHubIcon";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { useTranslation } from "@/hooks/useTranslation";

interface SectionProps {
  id: string;
}

export default function Skills({ id }: SectionProps) {
  const { t } = useTranslation();

  const skillsData = [
    {
      title: "JavaScript",
      description:
        "The programming language of the web for creating dynamic and interactive experiences",
      icon: <JavaScriptIcon />,
    },
    {
      title: "Css",
      description:
        "Styling language for creating responsive layouts and beautiful user interfaces",
      icon: <CssIcon />,
    },
    {
      title: "Html",
      description:
        "Essential markup language for structuring web content and semantic elements",
      icon: <HtmlIcon />,
    },
    {
      title: "React",
      description:
        "JavaScript library for building interactive user interfaces with component-based architecture",
      icon: <ReactIcon />,
    },
    {
      title: "React Native",
      description:
        "Framework for building native mobile applications using React components",
      icon: <ReactIcon />,
    },
    {
      title: "Next.js",
      description:
        "Full-stack React framework for production-ready applications with server-side rendering",
      icon: <NextJsIcon />,
    },
    {
      title: "TailwindCss",
      description:
        "Utility-first CSS framework for rapid UI development with pre-designed classes",
      icon: <TailwindIcon />,
    },
    {
      title: "Jest",
      description:
        "JavaScript testing framework for unit and integration testing with code coverage",
      icon: <JestIcon />,
    },
    {
      title: "Sass Css",
      description:
        "CSS preprocessor that extends CSS with variables, nesting, and advanced features",
      icon: <SassIcon />,
    },
    {
      title: "TypeScript",
      description:
        "Typed superset of JavaScript that catches errors early and improves code quality",
      icon: <TypeScriptIcon />,
    },
    {
      title: "PostgresSql",
      description:
        "Advanced open-source relational database for handling complex queries and data integrity",
      icon: <PostgresSqlIcon />,
    },
    {
      title: "GitHub",
      description:
        "Version control platform for collaborative code management and project hosting",
      icon: <GitHubIcon />,
    },
  ];

  return (
    <section id={id} className={styles.sectionWrapper}>
      <SectionHeader title="SKILLS" subtitle="specialities" />

      <div className={styles.cardsWrapper}>
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            description={skill.description}
            title={skill.title}
          />
        ))}
      </div>
    </section>
  );
}
