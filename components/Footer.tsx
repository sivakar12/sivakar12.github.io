'use client';

import { useTheme } from '@/components/ThemeProvider';
import data from '@/data';
import styles from './Footer.module.css';

export default function Footer() {
  const { colors } = useTheme();

  return (
    <footer className={styles.footer} style={{ background: colors.primaryGradient }}>
      <div className="container">
        &copy; {new Date().getFullYear()} {data.name}
      </div>
    </footer>
  );
}