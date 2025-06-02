import { usePathname } from "next/navigation";
import en from "@/translations/en.json";
import pt from "@/translations/pt.json";

type Translations = typeof en;

export function useTranslation() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/pt") ? "pt" : "en";

  const translations: Translations = locale === "pt" ? pt : en;

  return {
    t: translations,
    locale,
  };
}
