// app/projects/page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProjectItem } from '@/data/types';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

// Assume we're importing project data from somewhere
import projectsData from '@/data/projects';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const projectTitle = searchParams.get('project');
    if (projectTitle) {
      const project = projectsData.find(p => p.title === decodeURIComponent(projectTitle));
      if (project) {
        setSelectedProject(project);
      }
    } else {
      setSelectedProject(null);
    }
  }, [searchParams]);

  const handleProjectSelect = (project: ProjectItem) => {
    setSelectedProject(project);
    router.push(`/projects?project=${encodeURIComponent(project.title)}`, { scroll: false });
  };

  const handleBackToGrid = () => {
    setSelectedProject(null);
    router.push('/projects', { scroll: false });
  };

  return (
    <div className="container mx-auto p-4">
      {selectedProject ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 pr-4">
            <button 
              onClick={handleBackToGrid}
              className="mb-4 text-blue-600 hover:underline"
            >
              ← Back to all projects
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  isSelected={project.title === selectedProject.title}
                  onClick={() => handleProjectSelect(project)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0">
            <ProjectDetail project={selectedProject} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => handleProjectSelect(project)}
            />
          ))}
        </div>
      )}
    </div>
  );
}