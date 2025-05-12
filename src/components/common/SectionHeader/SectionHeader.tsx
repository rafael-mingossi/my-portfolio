import styles from "./sectionHeader.module.css";

export default function SectionHeader() {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.headerTitle}>SKILLS</p>
      <h4 className={styles.h4}>
        <b className={styles.bold}>My</b> specialities
      </h4>
    </div>
  );
}
