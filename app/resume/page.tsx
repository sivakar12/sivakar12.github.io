import React from 'react';
import { ResumeData, SkillGroupItem, ExperienceItem, EducationItem } from '@/data/types';

// Assume we're importing the data from somewhere
import resumeData from '@/data/resume';

const ResumePage: React.FC = () => {
  const resume: ResumeData = resumeData;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{resume.name}</h1>
        <p className="text-md mb-4">{resume.personalStatement}</p>
        <div className="text-sm space-y-1">
          <p>Email: {resume.contact.email}</p>
          <p>Phone: {resume.contact.phone}</p>
          {Object.entries(resume.links).map(([platform, url]) => (
            <p key={platform}>
              {platform}: {url}
            </p>
          ))}
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-5">
          {resume.skills.map((skill: SkillGroupItem, index: number) => (
            <li key={index} className="mb-2">
              <strong>{skill.title}:</strong> {skill.details}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        {resume.experiences.map((exp: ExperienceItem, index: number) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{exp.jobTitle} at {exp.company}</h3>
            <p className="text-gray-600 mb-2">{exp.dates}</p>
            <ul className="list-disc pl-5">
              {exp.details.map((detail, detailIndex) => (
                <li key={detailIndex}>
                  <strong>{detail.title}:</strong> {detail.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        {resume.education.map((edu: EducationItem, index: number) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{edu.title}</h3>
            <ul className="list-disc pl-5">
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Interests</h2>
        <ul className="list-disc pl-5">
          {resume.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ResumePage;