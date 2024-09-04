// app/articles/ArticleCard.tsx
import React from 'react';
import { ArticleItem } from '@/data/types';

interface ArticleCardProps {
  article: ArticleItem;
  isSelected?: boolean;
  onClick: () => void;
}

export default function ArticleCard({ article, isSelected, onClick }: ArticleCardProps) {
  return (
    <div 
      className={`border p-4 rounded cursor-pointer transition-all duration-300 ${
        isSelected ? 'bg-blue-100 shadow-lg' : 'hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
      {article.date && <p className="text-sm text-gray-600 mb-2">{article.date}</p>}
      {article.shortDescription && <p>{article.shortDescription}</p>}
    </div>
  );
}