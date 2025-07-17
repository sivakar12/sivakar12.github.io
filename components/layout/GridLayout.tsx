import { Children, cloneElement, isValidElement } from 'react';

interface GridLayoutProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'compact' | 'wide';
}

export default function GridLayout({ 
  children, 
  className = '', 
  variant = 'default'
}: GridLayoutProps) {
  const gridConfigs = {
    default: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    compact: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
    wide: 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'
  };
  
  const gridCols = gridConfigs[variant];
  
  const childrenWithDelay = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ...child.props,
        style: {
          ...child.props.style,
          animationDelay: `${(index % 8) * 100}ms`
        }
      });
    }
    return child;
  });
  
  return (
    <div className={`grid ${gridCols} gap-4 auto-rows-fr ${className}`}>
      {childrenWithDelay}
    </div>
  );
} 