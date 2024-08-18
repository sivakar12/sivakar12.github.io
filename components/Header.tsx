'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import styles from './Header.module.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Projects', path: '/projects' },
  { name: 'Articles', path: '/articles' },
  { name: 'Links', path: '/links' },
];

export default function Header() {
  const { toggleTheme, mode, colors } = useTheme();
  const pathname = usePathname();

  return (
    <header className={styles.header} style={{ backgroundColor: colors.background }}>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            href={item.path}
            className={`${styles.navItem} ${pathname === item.path ? styles.selected : ''}`}
          >
            <span style={{
              backgroundImage: pathname === item.path ? colors.secondaryGradient : colors.primaryGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
      <button 
        onClick={toggleTheme} 
        className={styles.themeToggle}
        style={{ color: colors.text }}
        aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      >
        {mode === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}