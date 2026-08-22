import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

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
  title: "MyContacts",
  description: "MyContacts com Next.js e Shadcn/UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="px-4 font-sans antialiased">
        <ThemeProvider>
          <div className="flex justify-center mt-40 mb-10">
            <div className="space-y-8 w-full max-w-xl">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
