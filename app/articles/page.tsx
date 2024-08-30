'use client';

import React, { useState } from 'react';
import { useTheme } from '../../components/ThemeProvider';
import data from '../../data/index';
import styles from './articles.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import MarkdownText from '../../components/MarkdownText';

type Article = typeof data.articles[0];

export default function Articles() {
  const { mode, colors } = useTheme();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  const visibleArticles = data.articles.filter(article => !article.hidden);

  return (
    <div className={styles.pageContainer} style={{ backgroundColor: colors.background, color: colors.text }}>
      <div className={styles.container}>
        <div className={styles.articleGrid}>
          {visibleArticles.map((article, index) => (
            <motion.div
              key={index}
              className={styles.articleBox}
              style={{
                backgroundColor: mode === 'light' ? colors.white : colors.black,
                borderColor: colors.accent,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openArticle(article)}
            >
              <h3 style={{ color: colors.primary }}>{article.title}</h3>
              <p>{article.shortDescription || 'Click to read more'}</p>
              <p className={styles.date}>{article.date}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeArticle}
            >
              <motion.div
                className={styles.modal}
                style={{ backgroundColor: mode === 'light' ? colors.white : colors.black, color: colors.text }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 15 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.closeButton} onClick={closeArticle}>
                  Close
                </button>
                <div className={styles.modalContent}>
                  <h2 style={{ color: colors.primary }}>{selectedArticle.title}</h2>
                  <p className={styles.date}>{selectedArticle.date}</p>
                  <div className={styles.markdownContent}>
                    <MarkdownText markdownContent={selectedArticle.contentMarkdown} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}