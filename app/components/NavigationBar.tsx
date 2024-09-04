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
                  'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 scale-110': 
                    pathname === item.href,
                  'text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-600 hover:scale-105':
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