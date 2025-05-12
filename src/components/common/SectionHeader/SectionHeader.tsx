import styles from "./sectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.headerTitle}>{title}</p>
      <h4 className={styles.h4}>
        <b className={styles.bold}>My</b> {subtitle}
      </h4>
    </div>
  );
}
