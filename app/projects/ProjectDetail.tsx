// app/projects/ProjectDetail.tsx
import React from 'react';
import { ProjectItem } from '@/data/types';
import MarkdownText from '../utils/MarkdownText';

interface ProjectDetailProps {
  project: ProjectItem;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{project.date}</p>
      <MarkdownText markdownContent={project.longDescriptionMarkdown} />
      {project.screenshotUrls.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Screenshots</h3>
          <div className="grid grid-cols-2 gap-4">
            {project.screenshotUrls.map((url, index) => (
              <img key={index} src={url} alt={`Screenshot ${index + 1}`} className="w-full h-auto" />
            ))}
          </div>
        </div>
      )}
      {project.links.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Links</h3>
          <ul className="list-disc pl-5">
            {project.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}