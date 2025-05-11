import styles from "./page.module.css";
import Hero from "@/components/sections/Hero/Hero";

export default function Page() {
  return (
    <div className={styles.page}>
      <Hero />
    </div>
  );
}
