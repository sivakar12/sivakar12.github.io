'use client';

import { useTheme } from '../../components/ThemeProvider';
import data from '../../data/index';
import styles from './resume.module.css';

export default function Resume() {
  const { colors } = useTheme();

  return (
    <div style={{ backgroundColor: colors.background, color: colors.text, minHeight: '100vh' }}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{data.resume.name}</h1>
          <p>{data.resume.contact.email} | {data.resume.contact.phone}</p>
          <p>
            {Object.entries(data.resume.links).map(([key, value], index) => (
              <span key={key}>
                {index > 0 && ' | '}
                <a href={value} target="_blank" rel="noopener noreferrer" className={styles.link}>{key}</a>
              </span>
            ))}
          </p>
        </header>

        <section className={styles.section}>
          <h2>Personal Statement</h2>
          <p>{data.resume.personalStatement}</p>
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.skillsList}>
            {data.resume.skills.map((skill, index) => (
              <li key={index}>
                <strong>{skill.title}:</strong> {skill.details}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Experience</h2>
          {data.resume.experiences.map((exp, index) => (
            <div key={index} className={styles.experience}>
              <h3>{exp.jobTitle} - {exp.company}</h3>
              <p className={styles.dates}>{exp.dates}</p>
              <ul className={styles.list}>
                {exp.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>
                    <strong>{detail.title}:</strong> {detail.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          {data.resume.education.map((edu, index) => (
            <div key={index} className={styles.education}>
              <h3>{edu.title}</h3>
              <ul className={styles.list}>
                {edu.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Interests</h2>
          <ul className={styles.interestsList}>
            {data.resume.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}