interface GridLayoutProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export default function GridLayout({ 
  children, 
  className = '', 
  cols = { sm: 1, md: 2, lg: 3 } 
}: GridLayoutProps) {
  const gridCols = `grid-cols-1 sm:grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg}${cols.xl ? ` xl:grid-cols-${cols.xl}` : ''}`;
  
  return (
    <div className={`grid ${gridCols} gap-4 ${className}`}>
      {children}
    </div>
  );
} 