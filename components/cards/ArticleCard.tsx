import Link from 'next/link';
import { Article } from '@/types/types';

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export default function ArticleCard({ article, className = '' }: ArticleCardProps) {
  return (
    <Link 
      href={`/articles/${article.id}`} 
      className={`block h-full ${className}`}
    >
      <div className="card group h-full flex flex-col min-h-[160px]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-gray-800 group-hover:text-primary-700 transition-colors">
            {article.title}
          </h2>
        </div>
        <div className="mt-3">
          {article.shortDescription && (
            <p className="text-gray-700 text-sm">{article.shortDescription}</p>
          )}
        </div>
      </div>
    </Link>
  );
} 