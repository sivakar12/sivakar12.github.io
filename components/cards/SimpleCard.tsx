import Link from 'next/link';

interface SimpleCardProps {
  title: string;
  description?: string;
  href: string;
  className?: string;
}

export default function SimpleCard({ title, description, href, className = '' }: SimpleCardProps) {
  return (
    <Link 
      href={href} 
      className={`block h-full ${className}`}
    >
      <div className="card group h-full flex flex-col min-h-[160px]">
        <div className="h-16 flex items-start justify-between">
          <h2 className="text-2xl text-gray-800 group-hover:text-primary-700 transition-colors leading-tight">
            {title}
          </h2>
        </div>
        <div className="mt-3">
          {description && (
            <p className="text-gray-700 text-sm">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
} 