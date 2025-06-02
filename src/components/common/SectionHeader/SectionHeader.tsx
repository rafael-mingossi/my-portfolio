import styles from "./sectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  my: string;
}

export default function SectionHeader({
  title,
  subtitle,
  my,
}: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.headerTitle}>{title}</p>
      <h4 className={styles.h4}>
        <b className={styles.bold}>{my}</b> {subtitle}
      </h4>
    </div>
  );
}
