import type { Metadata } from "next";
import { Merriweather } from 'next/font/google'

import "./globals.css";
import NavigationBar from "@/app/components/NavigationBar";

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
    // <html lang="en">
    //   <body className={merriweather.className}>
    //     <NavigationBar/>
    //     {children}
    //   </body>
    // </html>
    <html lang="en">
    <body className={"flex flex-col min-h-screen " + merriweather.className}>
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
