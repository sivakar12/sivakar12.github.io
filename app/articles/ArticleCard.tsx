import Link from 'next/link'
import { ArticleItem } from '@/data/types'
import titleToSlug from './titleToSlug';

interface ArticleCardProps {
  article: ArticleItem;
  className?: string;
}

export default function ArticleCard({ article, className = '' }: ArticleCardProps) {
  return (
    <Link href={`/articles/${titleToSlug(article.title)}`} className={`block ${className}`}>
      <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 h-full flex flex-col">
        <div>
          <h2 className="text-xl font-bold mb-2 text-gradient">{article.title}</h2>
          <p className="text-4xl mb-2">{article.emoji}</p>
        </div>
        {article.shortDescription && (
          <p className="text-gray-600 mt-2">{article.shortDescription}</p>
        )}
        <div className="flex-grow"></div>
      </div>
    </Link>
  )
}