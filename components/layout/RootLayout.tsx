import { ReactNode } from 'react';
import NavigationBar from '@/components/NavigationBar';
import GoogleAnalytics from '@/components/GoogleAnalytics';

interface RootLayoutProps {
  children: ReactNode;
  navItems: Array<{ name: string; href: string }>;
  fontClassName: string;
  gaMeasurementId: string;
}

export default function RootLayout({ 
  children, 
  navItems, 
  fontClassName, 
  gaMeasurementId 
}: RootLayoutProps) {
  return (
    <body className={`flex flex-col min-h-screen bg-surface-background ${fontClassName}`}>
      <GoogleAnalytics GA_MEASUREMENT_ID={gaMeasurementId} />
      <nav className="fixed top-0 left-0 right-0 h-16 bg-surface-card z-10">
        <NavigationBar navItems={navItems} />
      </nav>
      <main className="flex-grow mt-16">
        {children}
      </main>
    </body>
  );
} 