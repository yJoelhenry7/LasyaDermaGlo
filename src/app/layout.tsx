import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CursorFollower } from "@/components/CursorFollower";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { pageKeywords } from "@/data/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = createMetadata({
  keywords: pageKeywords.home,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="font-sans antialiased">
        <JsonLd />
        <a
          href="#main-content"
          className="bg-sage-dark text-white focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[200] focus-visible:inline-flex focus-visible:rounded-full focus-visible:px-4 focus-visible:py-2 focus-visible:shadow-lg sr-only focus-visible:not-sr-only focus-visible:outline-none"
        >
          Skip to main content
        </a>
        <PageLoader />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
        <CursorFollower />
      </body>
    </html>
  );
}
