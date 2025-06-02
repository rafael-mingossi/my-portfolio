"use client";

import { useRouter, usePathname } from "next/navigation";
import styles from "./languageToggle.module.css";
import { useEffect, useState } from "react";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(pathname.startsWith("/pt"));
  }, [pathname]);

  const handleToggle = () => {
    const newLocale = isChecked ? "en" : "pt";
    const currentLocale = isChecked ? "pt" : "en";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);

    if (!pathname.startsWith("/en") && !pathname.startsWith("/pt")) {
      router.push(`/${newLocale}${pathname}`);
    } else {
      router.push(newPath);
    }
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        aria-label={`Switch to ${isChecked ? "English" : "Portuguese"}`}
      />
      <span className={styles.slider}>
        <span
          className={`${styles.label} ${styles.labelLeft} ${!isChecked ? styles.labelActive : ""}`}
        >
          EN
        </span>
        <span
          className={`${styles.label} ${styles.labelRight} ${isChecked ? styles.labelActive : ""}`}
        >
          PT
        </span>
      </span>
    </label>
  );
}
