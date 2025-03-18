import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'

import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const font = Open_Sans({
  subsets: ['latin'],
  weight: ['500', '300', '400', '500', '600'],
  variable: '--font-open_sans',
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
    <body className={"flex flex-col min-h-screen " + font.className}>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow z-10">
        <NavigationBar/>
      </nav>
      <main className="flex-grow mt-16">
        {children}
      </main>
    </body>
  </html>
  );
}
