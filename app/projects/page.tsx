'use client';

import React, { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import data from '@/data';
import styles from './projects.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

type Project = typeof data.projects[0];

export default function Projects() {
  const { mode, colors } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.pageContainer} style={{ backgroundColor: colors.background, color: colors.text }}>
      <div className={styles.container}>
        <h1 className={styles.title} style={{ color: colors.primary }}>{data.title}</h1>
        <div className={styles.projectGrid}>
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectBox}
              style={{
                backgroundColor: mode === 'light' ? colors.white : colors.black,
                borderColor: colors.accent,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openProject(project)}
            >
              <h3 style={{ color: colors.primary }}>{project.title}</h3>
              <p>{project.shortDescription}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
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
                <button className={styles.closeButton} onClick={closeProject}>
                  Close
                </button>
                <div className={styles.modalContent}>
                  <h2 style={{ color: colors.primary }}>{selectedProject.title}</h2>
                  <p className={styles.tagline}>{selectedProject.shortDescription}</p>
                  <div className={styles.screenshotContainer}>
                    {selectedProject.screenshotUrls.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Screenshot ${index + 1}`}
                        className={styles.screenshot}
                      />
                    ))}
                  </div>
                  <div className={styles.markdownContent}>
                    <ReactMarkdown>{selectedProject.longDescriptionMarkdown}</ReactMarkdown>
                  </div>
                  <div className={styles.links}>
                    {selectedProject.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        style={{ color: colors.primary }}
                      >
                        {link.title}
                      </a>
                    ))}
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