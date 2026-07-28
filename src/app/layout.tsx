import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "Omega Construction | Commercial & Residential Builder Auckland",
    template: "%s | Omega Construction Auckland",
  },
  description:
    "Omega Construction is an Auckland commercial and residential builder established in 1994. Site Safe certified. New builds, renovations, fit-outs and alterations.",
  keywords: [
    "commercial builder Auckland",
    "construction company Auckland",
    "house renovation Auckland",
    "commercial fit-out Auckland",
    "building alterations Auckland",
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: "Omega Construction",
    title: "Omega Construction | Commercial & Residential Builder Auckland",
    description:
      "Auckland commercial and residential builder established in 1994. Site Safe certified.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-NZ"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
