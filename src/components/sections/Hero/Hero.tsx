import styles from "./hero.module.css";
import Image from "next/image";

interface SectionProps {
  id: string;
}

export default function Hero({ id }: SectionProps) {
  return (
    <section id={id} className={styles.heroWrapper}>
      <div className={styles.fakeBox1} />
      <div className={styles.gradientCard}>
        <div className={styles.leftContent}>
          <span>
            <h1 className={styles.h1}>Rafael Mingossi</h1>
            <h2 className={styles.h2}>Front-End Developer</h2>
          </span>
          <span>
            <p>
              JavaScript specialist with a passion for clean code and
              pixel-perfect UI, turning complex problems into elegant solutions
              since 2021.
            </p>
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
