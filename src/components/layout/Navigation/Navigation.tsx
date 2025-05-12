"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";
import React, { useState, useEffect } from "react";

const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
];

export default function Navigation() {
  const pathname = usePathname();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.nav}>
      <p>Social Icons</p>
      <span className={styles.linksWrapper}>
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={pathname === item.href ? styles.active : styles.normal}
          >
            {item.label}
          </Link>
        ))}
      </span>
      <p>Download CV Btn</p>
    </nav>
  );
}
