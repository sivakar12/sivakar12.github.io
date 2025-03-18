import React from 'react';
import { LinkItem } from '@/types/types';
import { loadLinks } from '@/utils/data-loaders';

const LinkCard: React.FC<{ link: LinkItem; }> = ({ link }) => {
  return (
    <a 
      href={link.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex flex-col items-center justify-between p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full h-full text-gray-800`}
    >
      <span className="text-5xl mb-4">{link.emoji}</span>
      <span className="text-xl font-bold text-center mb-2">{link.name}</span>
      <div className="w-full text-center">
        <span className="text-xs inline-block max-w-full truncate">{link.url}</span>
      </div>
    </a>
  );
};

export default function LinksPage() {
  const links = loadLinks();

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {links.map((link) => (
          <div key={link.id} className="h-64">
            <LinkCard 
              link={link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}