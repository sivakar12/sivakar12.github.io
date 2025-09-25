'use client';

import ExperimentPillLabel from './ExperimentPillLabel';

interface PillOption {
  id: string;
  name: string;
  value: any;
  style?: React.CSSProperties; // For custom styling like fonts
}

interface PillSwitcherProps {
  options: PillOption[];
  selectedValue: any;
  onSelect: (value: any) => void;
  label?: string;
  className?: string;
  layout?: 'horizontal' | 'vertical' | 'grid' | 'wrap';
  size?: 'sm' | 'md' | 'lg';
  showCategories?: boolean;
  categories?: {
    [categoryName: string]: PillOption[];
  };
}

export default function PillSwitcher({ 
  options, 
  selectedValue, 
  onSelect, 
  label,
  className = "",
  layout = 'horizontal',
  size = 'md',
  showCategories = false,
  categories = {}
}: PillSwitcherProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const layoutClasses = {
    horizontal: 'flex gap-4',
    vertical: 'flex flex-col gap-2',
    grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3',
    wrap: 'flex flex-wrap gap-3'
  };

  const renderPills = (pills: PillOption[]) => (
    <div className={layoutClasses[layout]}>
      {pills.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.value)}
          style={option.style}
          className={`${sizeClasses[size]} rounded-lg border-2 transition-all ${
            selectedValue === option.value
              ? 'border-gray-500 bg-gray-50 text-gray-700'
              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
          }`}
        >
          {option.name}
        </button>
      ))}
    </div>
  );

  return (
    <div className={`mb-8 ${className}`}>
      {label && (
        <ExperimentPillLabel>{label}</ExperimentPillLabel>
      )}
      
      {showCategories && Object.keys(categories).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(categories).map(([categoryName, categoryOptions]) => (
            <div key={categoryName}>
              <ExperimentPillLabel className="text-base">{categoryName}</ExperimentPillLabel>
              {renderPills(categoryOptions)}
            </div>
          ))}
        </div>
      ) : (
        renderPills(options)
      )}
    </div>
  );
}
