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
  title: "Ahmad Hazli Yahya | Informatics Graduate & Creative Developer",
  description:
    "Ahmad Hazli Yahya is an Informatics graduate from Telkom University, Indonesia, with experience in software development, digital products, UI/UX design, and creative production.",
  verification: {
    google: "HA1flzK4e0ZE8OyHTAcgbmvTWiacrVIFgUUuu4nI0_8",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
