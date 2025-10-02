import type { Metadata } from "next";
import { Besley } from 'next/font/google'

import "./globals.css";
import RootLayout from "@/components/layout/RootLayout";
import { navItems } from "@/data/navigation";

const font = Besley({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-besley',
})

export const metadata: Metadata = {
  title: "Sivakar Sithamparanthan",
  description: "Software Engineer | Fullstack Developer | Writer",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RootLayout 
        navItems={navItems}
        fontClassName={font.className}
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''}
      >
        {children}
      </RootLayout>
    </html>
  );
}
