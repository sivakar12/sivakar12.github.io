import type { Metadata } from "next";
import { Signika } from 'next/font/google'

import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const font = Signika({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-signika',
})

export const metadata: Metadata = {
  title: "Sivakar Sithamparanthan",
  description: "Software Engineer | Fullstack Developer | Writer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={"flex flex-col min-h-screen bg-surface-background " + font.className}>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-surface-card z-10">
        <NavigationBar/>
      </nav>
      <main className="flex-grow mt-16">
        {children}
      </main>
    </body>
  </html>
  );
}
