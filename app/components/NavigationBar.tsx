'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'CS Notes', href: '/cs-notes' },
  { name: 'Projects', href: '/projects' },
  { name: 'Articles', href: '/articles' },
  { name: 'Links', href: '/links' },
];

export default function NavigationBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <li key={item.name} className="w-full">
          <Link
            href={item.href}
            className={`block w-full px-4 py-2 text-xl font-semibold text-center transition-all duration-300 ease-in-out hover:scale-105 hover:text-gradient whitespace-nowrap ${
              isActive(item.href) ? 'text-gradient' : 'text-black'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <nav className="w-full py-4">
      {isMobile ? (
        <div className="flex justify-end relative items-center">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 flex flex-col justify-center items-center space-y-1.5"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Top line */}
            <span
              className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            {/* Middle line */}
            <span
              className={`block w-8 h-0.5 bg-black transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            {/* Bottom line */}
            <span
              className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
          {isMenuOpen && (
            <ul
              ref={menuRef}
              className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-2 z-50 max-h-[80vh] overflow-y-auto"
            >
              <NavItems />
            </ul>
          )}
        </div>
      ) : (
        <ul className="flex justify-center space-x-8">
          <NavItems />
        </ul>
      )}
    </nav>
  );
}