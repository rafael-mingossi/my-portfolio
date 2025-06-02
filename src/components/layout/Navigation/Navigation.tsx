"use client";

import Link from "next/link";
import styles from "./navigation.module.css";
import React, { useEffect, useState } from "react";
import GitHubIcon from "@/components/common/icons/GitHubIcon";
import LinkedInIcon from "@/components/common/icons/LinkedInIcon";
import LanguageToggle from "@/components/common/LanguageToggle/LanguageToggle";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navigationItems = [
    { href: "#home", label: t.navigation.home },
    { href: "#skills", label: t.navigation.skills },
    { href: "#about", label: t.navigation.about },
    { href: "#projects", label: t.navigation.projects },
  ];

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

    // Observe all sections
    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
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
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.nav}>
      {/* Desktop Menu */}
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

          <LanguageToggle />
        </div>

        <div className={styles.linksWrapper}>
          {navigationItems.map((item) => {
            const sectionId = item.href.substring(1); // remove #
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
        </div>

        <a href={t.navigation.resumeLink} download className={styles.actionCta}>
          {t.navigation.resume}
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileMenu}>
          <div className={styles.mobileHeader}>
            <div className={styles.mobileIcons}>
              <a
                href="https://github.com/rafael-mingossi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={styles.iconLink}
              >
                <GitHubIcon width={24} height={24} />
              </a>
              <a
                href="https://linkedin.com/in/rafaelmingossi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={styles.iconLink}
              >
                <LinkedInIcon width={24} height={24} />
              </a>
              <LanguageToggle />
            </div>
          </div>

          <div className={styles.mobileLinks}>
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={styles.mobileLink}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href="/Rafael-Mingossi-Resume.pdf"
            download
            className={styles.mobileActionCta}
          >
            {t.navigation.resume}
          </a>
        </div>
      </div>
    </nav>
  );
}
