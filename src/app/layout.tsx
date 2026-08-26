import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Federico Terradas — Analista en Sistemas & Developer",
  description:
    "Portfolio de Federico Terradas. Analista en Sistemas enfocado en el desarrollo end-to-end de aplicaciones: desde el relevamiento de requerimientos hasta el deploy. Córdoba, Argentina.",
  keywords: [
    "Federico Terradas",
    "Analista en Sistemas",
    "Developer",
    "Next.js",
    "Firebase",
    "PostgreSQL",
    "Freelance",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Federico Terradas" }],
  creator: "Federico Terradas",
  openGraph: {
    title: "Federico Terradas — Analista en Sistemas & Developer",
    description:
      "Portfolio de Federico Terradas. Desarrollo end-to-end: relevamiento, implementación, pruebas y deploy.",
    url: "https://federicoterradas.dev",
    siteName: "Federico Terradas",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
