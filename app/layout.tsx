import type { Metadata } from "next";
import { Merriweather } from 'next/font/google'

import "./globals.css";
import NavigationBar from "./components/NavigationBar";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
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
      <body className={merriweather.className}>
        <NavigationBar/>
        {children}
      </body>
    </html>
  );
}
