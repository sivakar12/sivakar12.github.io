'use client';

import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import data from '@/data';
import styles from './Header.module.css';

export default function Header() {
  const { toggleTheme, colors } = useTheme();

  return (
    <header className={styles.header} style={{ background: colors.primaryGradient }}>
      <div className={`container ${styles.headerContent}`}>
        <h1 className={styles.title}>{data.name}</h1>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button 
          onClick={toggleTheme} 
          className={styles.themeToggle}
          style={{ background: colors.secondaryGradient }}
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
}