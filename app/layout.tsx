import { ReactNode } from 'react';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import data from '@/data';
import './globals.css';

export const metadata: Metadata = {
  title: `${data.name} - ${data.title}`,
  description: data.smallBio,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: data.settings.font }}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}