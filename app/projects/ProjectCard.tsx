import React from 'react';
import { ProjectItem } from '@/data/types';

interface ProjectCardProps {
  project: ProjectItem;
  isSelected?: boolean;
  onClick: () => void;
}

export default function ProjectCard({ project, isSelected, onClick }: ProjectCardProps) {
  return (
    <div 
      className={`border p-4 rounded cursor-pointer transition-all duration-300 ${
        isSelected ? 'bg-blue-100 shadow-lg' : 'hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{project.date}</p>
      <p>{project.shortDescription}</p>
    </div>
  );
}