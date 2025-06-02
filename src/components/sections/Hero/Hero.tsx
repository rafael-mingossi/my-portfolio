"use client";
import styles from "./hero.module.css";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

interface SectionProps {
  id: string;
}

export default function Hero({ id }: SectionProps) {
  const { t } = useTranslation();
  return (
    <section id={id} className={styles.heroWrapper}>
      <div className={styles.fakeBox1} />
      <div className={styles.gradientCard}>
        <div className={styles.leftContent}>
          <span>
            <h1 className={styles.h1}>Rafael Mingossi</h1>
            <h2 className={styles.h2}>{t.hero.title}</h2>
          </span>
          <span>
            <p>{t.hero.description}</p>
          </span>
        </div>

        <div className={styles.profileImgWrapper}>
          <Image
            src="/hero-circle-decoration.svg"
            alt="Hero decoration"
            height={147}
            width={147}
            className={styles.decorationImg}
          />
          <Image
            src="/raf-no-bg-hq.webp"
            alt="Rafs photo"
            width={433}
            height={577}
            quality={90}
            priority
            className={styles.profileImg}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            fill={false}
          />
        </div>
      </div>
      <div className={styles.fakeBox2} />
    </section>
  );
}
