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
      description: t.skills.items.javascript.description,
      icon: <JavaScriptIcon />,
    },
    {
      title: "Css",
      description: t.skills.items.css.description,
      icon: <CssIcon />,
    },
    {
      title: "Html",
      description: t.skills.items.html.description,
      icon: <HtmlIcon />,
    },
    {
      title: "React",
      description: t.skills.items.react.description,
      icon: <ReactIcon />,
    },
    {
      title: "React Native",
      description: t.skills.items.reactNative.description,
      icon: <ReactIcon />,
    },
    {
      title: "Next.js",
      description: t.skills.items.nextjs.description,
      icon: <NextJsIcon />,
    },
    {
      title: "TailwindCss",
      description: t.skills.items.tailwind.description,
      icon: <TailwindIcon />,
    },
    {
      title: "Jest",
      description: t.skills.items.jest.description,
      icon: <JestIcon />,
    },
    {
      title: "Sass Css",
      description: t.skills.items.sass.description,
      icon: <SassIcon />,
    },
    {
      title: "TypeScript",
      description: t.skills.items.typescript.description,
      icon: <TypeScriptIcon />,
    },
    {
      title: "PostgresSql",
      description: t.skills.items.postgresql.description,
      icon: <PostgresSqlIcon />,
    },
    {
      title: "GitHub",
      description: t.skills.items.github.description,
      icon: <GitHubIcon />,
    },
  ];

  return (
    <section id={id} className={styles.sectionWrapper}>
      <SectionHeader
        title={t.skills.title}
        subtitle={t.skills.subtitle}
        my={t.skills.my}
      />

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
