'use client';

import { useTheme } from '../../components/ThemeProvider';
import data from '../../data/index';
import styles from './links.module.css';

export default function Links() {
  const { colors } = useTheme();

  return (
    <div style={{ backgroundColor: colors.background, color: colors.text, minHeight: '100vh' }}>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={data.photoUrl} alt={data.name} className={styles.profileImage} />
          <h1 className={styles.name}>{data.name}</h1>
        </header>
        <ul className={styles.linksList}>
          {Object.entries(data.resume.links).map(([key, value]) => (
            <li key={key}>
              <a 
                href={value} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.linkButton}
                style={{ 
                  background: colors.primaryGradient,
                  color: colors.white
                }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}