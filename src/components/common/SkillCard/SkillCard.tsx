import styles from "./skillCard.module.css";
import Image from "next/image";
import { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function SkillCard({
  title,
  description,
  icon,
}: SkillCardProps) {
  return (
    <div className={styles.skillCard}>
      <div className={styles.cardIconWrapper}>
        <Image
          src="/skill-card-decoration.svg"
          alt="Hero decoration"
          height={45}
          width={45}
          className={styles.decorationImg}
        />
        {icon}
      </div>
      <p className={styles.skillTitle}>{title}</p>
      <div className={styles.separator} />
      <p className={styles.description}>{description}</p>
    </div>
  );
}
