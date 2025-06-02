import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "pt"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  // Check if locale is already in the path
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameLocale) return pathnameLocale;

  // Default to 'en'
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if no locale is present
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, assets)
    "/((?!_next|api|favicon.ico|.*\\..*|Rafael-Mingossi-Resume.pdf).*)",
  ],
};
