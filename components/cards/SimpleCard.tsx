import Link from 'next/link';

interface SimpleCardProps {
  title: string;
  description?: string;
  href: string;
  style?: React.CSSProperties;
}

export default function SimpleCard({ title, description, href, style }: SimpleCardProps) {
  return (
    <Link 
      href={href} 
      className="block h-full animate-card-entrance"
      style={style}
    >
      <div className="card group h-full flex flex-col min-h-[160px]">
        <div className="h-20 flex items-start justify-between">
          <h2 className="text-2xl text-black font-semibold leading-tight">
            {title}
          </h2>
        </div>
        <div className="flex-1 flex items-start">
          {description && (
            <p className="text-black text-base leading-relaxed font-medium">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
} 