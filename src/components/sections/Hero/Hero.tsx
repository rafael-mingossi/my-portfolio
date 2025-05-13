import styles from "./hero.module.css";
import Image from "next/image";

interface SectionProps {
  id: string;
}

export default function Hero({ id }: SectionProps) {
  return (
    <section id={id} className={styles.heroWrapper}>
      <div
        style={{
          width: "100%",
          background: "#0a0a0c",
          display: "flex",
          flex: 1,
        }}
      />
      <div className={styles.gradientCard}>
        <div className={styles.leftContent}>
          <span>
            <h1 className={styles.h1}>Rafael Mingossi</h1>
            <h2 className={styles.h2}>Front-End Developer</h2>
          </span>
          <span>
            <p>
              JavaScript (React and React Native) specialist with a passion for
              clean code and pixel-perfect UI, turning complex problems into
              elegant solutions since 2021.
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
            quality={100}
            priority
            className={styles.profileImg}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      />
    </section>
  );
}
