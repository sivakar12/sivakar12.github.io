// app/articles/page.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArticleItem } from '@/data/types';
import ArticleCard from './ArticleCard';
import ArticleDetail from './ArticleDetail';

// Assume we're importing article data from somewhere
import articlesData from '@/data/articles';

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const articleTitle = searchParams.get('article');
    if (articleTitle) {
      const article = articlesData.find(a => a.title === decodeURIComponent(articleTitle));
      if (article && !article.hidden) {
        setSelectedArticle(article);
      }
    } else {
      setSelectedArticle(null);
    }
  }, [searchParams]);

  const handleArticleSelect = (article: ArticleItem) => {
    setSelectedArticle(article);
    router.push(`/articles?article=${encodeURIComponent(article.title)}`, { scroll: false });
  };

  const handleBackToGrid = () => {
    setSelectedArticle(null);
    router.push('/articles', { scroll: false });
  };

  const visibleArticles = articlesData.filter(article => !article.hidden);

  return (
    <div className="container mx-auto p-4">
      {selectedArticle ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 pr-4">
            <button 
              onClick={handleBackToGrid}
              className="mb-4 text-blue-600 hover:underline"
            >
              ← Back to all articles
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {visibleArticles.map((article) => (
                <ArticleCard
                  key={article.title}
                  article={article}
                  isSelected={article.title === selectedArticle.title}
                  onClick={() => handleArticleSelect(article)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0">
            <ArticleDetail article={selectedArticle} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleArticles.map((article) => (
            <ArticleCard
              key={article.title}
              article={article}
              onClick={() => handleArticleSelect(article)}
            />
          ))}
        </div>
      )}
    </div>
  );
}