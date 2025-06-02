"use client";

import { useRouter, usePathname } from "next/navigation";
import styles from "./languageToggle.module.css";
import { useEffect, useState } from "react";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecked, setIsChecked] = useState(pathname.startsWith("/pt"));
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsChecked(pathname.startsWith("/pt"));
  }, [pathname]);

  const handleToggle = () => {
    if (isNavigating) {
      return;
    }
    setIsChecked(!isChecked);
    setIsNavigating(true);

    setTimeout(() => {
      const newLocale = isChecked ? "en" : "pt";
      const currentLocale = isChecked ? "pt" : "en";
      const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);

      if (!pathname.startsWith("/en") && !pathname.startsWith("/pt")) {
        router.push(`/${newLocale}${pathname}`);
      } else {
        router.push(newPath);
      }
      setIsNavigating(false);
    }, 400);
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        disabled={isNavigating}
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
