import Link from 'next/link';

interface CenteredCardProps {
  title: string;
  emoji?: string;
  href: string;
  style?: React.CSSProperties;
}

export default function CenteredCard({ title, emoji, href, style }: CenteredCardProps) {
  return (
    <Link 
      href={href} 
      className="block h-full animate-card-entrance"
      style={style}
    >
      <div className="card group h-full flex flex-col min-h-[160px] justify-center">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-2xl text-gray-900 group-hover:text-primary-700 transition-colors leading-tight mb-2">
            {title}
          </h2>
          {emoji && (
            <span className="text-3xl group-hover:scale-110 transition-transform mt-2">
              {emoji}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
} 