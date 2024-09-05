import Link from 'next/link'
import { ArticleItem } from '@/data/types'

export default function ArticleCard({ article }: { article: ArticleItem }) {
  return (
    <Link href={`/articles/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition-transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2 text-gradient">{article.title}</h2>
        <p className="text-4xl mb-2">{article.emoji}</p>
        {article.shortDescription && (
          <p className="text-gray-600">{article.shortDescription}</p>
        )}
      </div>
    </Link>
  )
}