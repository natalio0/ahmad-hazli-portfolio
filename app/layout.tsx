import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ahmad Hazli Yahya — Informatics, Creative & Technology",
  description:
    "Ahmad Hazli Yahya is an Informatics graduate from Telkom University, Indonesia, with experience in software development, digital products, UI/UX design, and creative production.",
  openGraph: {
    title: "Ahmad Hazli Yahya — Informatics, Creative & Technology",
    description:
      "Portfolio of Ahmad Hazli Yahya — Informatics graduate, developer, and creative professional.",
    url: "https://ahmad-hazli-portfolio.vercel.app/",
    siteName: "Ahmad Hazli Yahya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Hazli Yahya — Informatics, Creative & Technology",
    description:
      "Portfolio of Ahmad Hazli Yahya — Informatics graduate, developer, and creative professional.",
  },
  verification: {
    google: "HA1flzK4e0ZE8OyHTAcgbmvTWiacrVIFgUUuu4nI0_8",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmad Hazli Yahya",
  url: "https://ahmad-hazli-portfolio.vercel.app/",
  sameAs: [
    "https://github.com/natalio0",
    "https://www.linkedin.com/in/ahmadhazlii",
  ],
  description:
    "Informatics graduate from Telkom University, Indonesia, with experience in software development, digital products, UI/UX design, and creative production.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Telkom University",
  },
  knowsAbout: [
    "Software Development",
    "Digital Products",
    "UI/UX Design",
    "Creative Production",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
