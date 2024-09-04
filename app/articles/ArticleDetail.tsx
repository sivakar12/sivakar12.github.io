// app/articles/ArticleDetail.tsx
import React from 'react';
import { ArticleItem } from '@/data/types';
import MarkdownText from '../utils/MarkdownText';

interface ArticleDetailProps {
  article: ArticleItem;
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
      {article.date && <p className="text-sm text-gray-600 mb-4">{article.date}</p>}
      <MarkdownText markdownContent={article.contentMarkdown} />
    </div>
  );
}