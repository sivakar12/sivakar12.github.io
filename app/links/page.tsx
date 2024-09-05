'use client';

import React from 'react';
import links from '@/data/links';
import { LinkItem } from '@/data/types';

const pastelColors = [
  'bg-red-200', 'bg-orange-200', 'bg-yellow-200', 'bg-green-200',
  'bg-teal-200', 'bg-blue-200', 'bg-indigo-200', 'bg-purple-200',
  'bg-pink-200'
];

const LinkCard: React.FC<{ link: LinkItem; color: string }> = ({ link, color }) => {
  return (
    <a 
      href={link.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex flex-col items-center justify-between p-6 ${color} rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full h-full text-gray-800 animate-shake`}
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
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {links.map((link, index) => (
          <div key={link.id} className="h-64">
            <LinkCard 
              link={link}
              color={pastelColors[index % pastelColors.length]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}