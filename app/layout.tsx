import type { Metadata } from "next";
import {
  Fraunces,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-fraunces",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imbitnil.com"),
  title: {
    default: "Rupesh Kumar",
    template: "%s | Rupesh Kumar",
  },
  description: "Personal portfolio of Rupesh Kumar.",
  openGraph: {
    title: "Rupesh Kumar",
    description: "Personal portfolio of Rupesh Kumar.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("theme");
                  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

                  if (stored === "dark" || (!stored && prefersDark)) {
                    document.documentElement.classList.add("dark");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

     {/* Navbar */}
<div className="mx-6">
  <Navbar />
</div>

{/* Page Content */}
<main className="mx-6 pt-20">
  {children}
</main>
      </body>
    </html>
  );
}