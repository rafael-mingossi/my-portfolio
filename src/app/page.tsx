import styles from "./page.module.css";
import Hero from "@/components/sections/Hero/Hero";
import Skills from "@/components/sections/Skills/Skills";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.gridWrapper}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} />
        ))}
      </div>
      <Hero id="home" />
      <Skills id="skills" />
    </div>
  );
}
