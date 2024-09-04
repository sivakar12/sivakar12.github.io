// app/links/page.tsx
import React from 'react';
import { LinksData } from '@/data/types';

// Assume we're importing links data from somewhere
import { linksData } from '@/data/contact';

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const LinkItem: React.FC<{ platform: string; url: string }> = ({ platform, url }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <span className="text-xl font-semibold">{capitalizeFirstLetter(platform)}</span>
    <span className="ml-auto text-blue-600">{new URL(url).hostname}</span>
  </a>
);

export default function LinksPage() {
  const links: LinksData = linksData;

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(links).map(([platform, url]) => (
          <LinkItem key={platform} platform={platform} url={url} />
        ))}
      </div>
    </div>
  );
}