import styles from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
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
          <h1>This is your</h1>
          <p>Content</p>
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
    </div>
  );
}
