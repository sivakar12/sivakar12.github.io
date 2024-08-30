'use client';

import Image from 'next/image';
import { useTheme } from '../components/ThemeProvider';
import data from '../data/index';
import styles from './page.module.css';
import MarkdownText from '../components/MarkdownText';
import { bigBio } from '../data/paragraphs';

export default function Home() {
  const { mode } = useTheme();
  const colors = mode === 'light' ? data.settings.colorScheme.light : data.settings.colorScheme.dark;

  return (
    <div className={styles.container} style={{ backgroundColor: colors.background, color: colors.text }}>
      <div className={styles.banner}>
        <div className={styles.photoContainer}>
          <Image
            src={`/${data.photoUrl}`}
            alt={data.name}
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.name} style={{ color: colors.secondary }}>
            {data.name}
          </h1>
          <p className={styles.tagline}>Software Engineer | Fullstack Developer</p>
        </div>
      </div>
      <section className={styles.aboutSection}>
        <h2 style={{ color: colors.primary }}>About Me</h2>
        <MarkdownText markdownContent={bigBio} />
      </section>
    </div>
  );
}