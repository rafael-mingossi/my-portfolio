"use client";

import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import styles from "./about.module.css";
import { useTranslation } from "@/hooks/useTranslation";

interface SectionProps {
  id: string;
}

export default function AboutMe({ id }: SectionProps) {
  const { t } = useTranslation();

  return (
    <section id={id} className={styles.sectionWrapper}>
      <SectionHeader title={t.about.title} subtitle={t.about.subtitle} />
      <p>
        {t.about.paragraph1}
        <br />
        <br />
        {t.about.paragraph2}
        <br />
        <br />
        {t.about.paragraph3}
      </p>
    </section>
  );
}
