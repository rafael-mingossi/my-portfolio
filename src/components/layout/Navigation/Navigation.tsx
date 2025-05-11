"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={pathname === item.href ? styles.active : styles.normal}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
