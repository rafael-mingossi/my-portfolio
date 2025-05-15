"use client";

import Link from "next/link";
import styles from "./navigation.module.css";
import React, { useEffect, useState } from "react";
import GitHubIcon from "@/components/common/icons/GitHubIcon";
import LinkedInIcon from "@/components/common/icons/LinkedInIcon";

const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    //Observe all sections
    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    //Cleanup
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.desktopMenu}>
        <div className={styles.leftBlock}>
          <a
            href="https://github.com/rafael-mingossi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={styles.iconLink}
          >
            <GitHubIcon width={20} height={20} />
          </a>

          <a
            href="https://linkedin.com/in/rafaelmingossi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={styles.iconLink}
          >
            <LinkedInIcon width={20} height={20} />
          </a>
        </div>
        <span className={styles.linksWrapper}>
          {navigationItems.map((item) => {
            const sectionId = item.href.substring(1); //remove #
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={isActive ? styles.active : styles.normal}
              >
                {item.label}
              </Link>
            );
          })}
        </span>
        <a
          href="/Rafael-Mingossi-Resume.pdf"
          download
          className={styles.actionCta}
        >
          My Resume
        </a>
      </div>
      <div
        className={`${styles.menuBars} ${isOpen && styles.menuBarsNoBg}`}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span className={`${styles.span} ${isOpen && styles.spanOpen}`} />
        <span className={`${styles.span} ${isOpen && styles.spanOpen}`} />
        <span className={`${styles.span} ${isOpen && styles.spanOpen}`} />
      </div>
    </nav>
  );
}
