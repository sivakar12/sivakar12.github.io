'use client';
import { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
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
  const pathname = usePathname();
  const router = useRouter();

  const isDetailPage = () => {
    const pathParts = pathname.split('/').filter(Boolean);
    return pathParts.length === 2 && ['articles', 'projects', 'cs-notes'].includes(pathParts[0]);
  };

  const getBackPath = () => {
    const pathParts = pathname.split('/').filter(Boolean);
    return `/${pathParts[0]}`;
  };

  return (
    <body className={`flex flex-col min-h-screen bg-surface-background ${fontClassName}`}>
      <GoogleAnalytics GA_MEASUREMENT_ID={gaMeasurementId} />
      <nav className="fixed top-0 left-0 right-0 h-16 bg-surface-card z-10">
        <NavigationBar
          navItems={navItems}
          currentPath={pathname}
          onNavigate={(href) => router.push(href)}
          showBackButton={isDetailPage()}
          backPath={getBackPath()}
        />
      </nav>
      <main className="flex-grow mt-16">
        {children}
      </main>
    </body>
  );
} 