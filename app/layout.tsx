import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simamia Chombo: Simamia pikipiki, bajaji na guta zako za mkataba",
  description:
    "Simamia Chombo ni app ya mabosi wanaotoa pikipiki, bajaji na guta kwa mikataba ya malipo ya awamu. Jua nani amelipa, nani amechelewa na deni lililobaki.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sw"
      className={`${display.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
