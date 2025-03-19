import React from 'react';
import { LinkItem } from '@/types/types';
import { loadLinks } from '@/utils/data-loaders';
import ContentCard from '@/components/ContentCard';

export default function LinksPage() {
  const links = loadLinks();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {links.map((link) => (
          <ContentCard 
            key={link.id}
            item={link}
            type="link"
            className="h-full"
          />
        ))}
      </div>
    </div>
  );
}