import { Article } from '@/types/types';
import Link from 'next/link'

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export default function ArticleCard({ article, className = '' }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.id}`} className={`block ${className}`}>
      <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 h-full flex flex-col">
        <div>
          <h2 className="text-xl font-bold mb-2 text-gradient">{article.title}</h2>
        </div>
        {article.shortDescription && (
          <p className="text-gray-600 mt-2">{article.shortDescription}</p>
        )}
        <div className="flex-grow"></div>
      </div>
    </Link>
  )
}