'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Projects', href: '/projects' },
  { name: 'Articles', href: '/articles' },
  { name: 'Links', href: '/links' },
];

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full py-4">
      <ul className="flex justify-center space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href} 
              className={clsx(
                'text-xl font-semibold transition-all duration-300 ease-in-out',
                {
                  'scale-110 text-gradient': 
                    pathname === item.href,
                  'text-black hover:.text-gradient hover:scale-105':
                    pathname !== item.href,
                }
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}