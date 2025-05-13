import styles from "./projectCard.module.css";
import Image from "next/image";
import Separator from "@/components/common/Separator/Separator";
import LinkedInIcon from "@/components/common/icons/LinkedInIcon";
import React from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  type: "mobile" | "web";
  techStack: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
}: ProjectCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <Image
        src={image}
        alt={`${title} project`}
        width={1120}
        height={1070}
        quality={100}
        className={styles.cardThumbnail}
      />
      <div className={styles.cardBottom}>
        <Image
          src="/project-card-decoration.svg"
          alt="Hero decoration"
          height={100}
          width={100}
          className={styles.decoration}
        />
        <p className={styles.skillTitle}>{title}</p>
        <Separator />
        <p className={styles.description}>{description}</p>
        <p className={styles.description}>
          <b>Tech Stack:</b> {techStack}
        </p>
        <a
          href="https://linkedin.com/in/rafaelmingossi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Project Visti Button"
          className={styles.iconLink}
        >
          Visit page
        </a>
      </div>
    </div>
  );
}
