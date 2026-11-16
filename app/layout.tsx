import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat, Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "./_components/smooth-scroll";
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

// Handwriting for the notebook ("daftari") illustration only.
const hand = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Simamia Chombo: Simamia pikipiki, bajaji na guta zako za mkataba",
  description:
    "Simamia Chombo ni app ya mabosi wanaotoa pikipiki, bajaji na guta kwa mikataba ya malipo ya awamu. Jua nani amelipa, nani amechelewa na deni lililobaki.",
};

export const viewport: Viewport = {
  themeColor: "#0f9d8a",
};

// Runs before paint: marks <html> so hero elements can start hidden for the
// intro animation. Skipped for users who prefer reduced motion.
const fxBootstrap = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('fx')}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sw"
      suppressHydrationWarning
      className={`${display.variable} ${geistSans.variable} ${geistMono.variable} ${hand.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: fxBootstrap }} />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
