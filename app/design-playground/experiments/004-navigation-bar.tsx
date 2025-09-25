'use client';

import { useState } from 'react';
import { navItems } from '@/data/navigation';
import PillSwitcher from '@/components/PillSwitcher';

type NavItem = {
  name: string;
  href: string;
};

interface NavigationBarProps {
  navItems: NavItem[];
  currentPath?: string;
  onNavigate?: (href: string) => void;
  hasBackground?: boolean;
  isMobile?: boolean;
}

// Single navigation component that adapts based on props
const NavigationBar = ({ navItems, currentPath = '/', hasBackground = false, isMobile = false, onNavigate }: NavigationBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  // Mobile view - always shows hamburger menu
  if (isMobile) {
    return (
      <div className="flex relative items-center px-4 py-4">
        <div className="flex-1" /> {/* Spacer to push hamburger to right */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 flex flex-col justify-center items-center space-y-1.5"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* Top line */}
          <span
            className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          {/* Middle line */}
          <span
            className={`block w-8 h-0.5 bg-gray-600 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          {/* Bottom line */}
          <span
            className={`block w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
        
        {isMenuOpen && (
          <div className={`absolute top-full left-0 w-full py-4 flex flex-col items-center space-y-2 z-50 max-h-[80vh] overflow-y-auto ${
            hasBackground 
              ? 'bg-orange-100' 
              : 'bg-white'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleItemClick(item.href, e)}
                className={`block w-full px-4 py-2 text-xl text-center transition-all duration-300 ease-in-out hover:scale-105 whitespace-nowrap ${
                  currentPath === item.href 
                    ? 'text-gray-900 font-semibold' 
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop view - shows full navigation
  if (hasBackground) {
    return (
      <nav className="bg-orange-100 w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-gray-700 cursor-pointer ${
                currentPath === item.href ? 'text-gray-900 font-semibold' : 'text-gray-600'
              }`}
              onClick={(e) => handleItemClick(item.href, e)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    );
  }

  // No background desktop view
  return (
    <nav className="w-full px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-gray-700 cursor-pointer ${
              currentPath === item.href ? 'text-gray-900 font-semibold' : 'text-gray-600'
            }`}
            onClick={(e) => handleItemClick(item.href, e)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

const NavigationBarExperiment = () => {
  const [hasBackground, setHasBackground] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  const navigationOptions = [
    { id: 'noBackground', name: 'No Background', value: false },
    { id: 'withBackground', name: 'With Background', value: true },
  ];

  const viewOptions = [
    { id: 'desktop', name: 'Desktop', value: false },
    { id: 'mobile', name: 'Mobile', value: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Style Selection */}
        <PillSwitcher
          options={navigationOptions}
          selectedValue={hasBackground}
          onSelect={setHasBackground}
          label="Navigation Style"
        />

        {/* View Toggle */}
        <PillSwitcher
          options={viewOptions}
          selectedValue={isMobileView}
          onSelect={setIsMobileView}
          label="View"
        />

        {/* Preview Container */}
        <div className="mb-8">
          
          <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${
            isMobileView ? 'w-80 mx-auto h-96' : 'w-full'
          }`}>
            {/* Navigation Bar - Full Width */}
            <NavigationBar 
              navItems={navItems} 
              currentPath={currentPath}
              onNavigate={setCurrentPath}
              hasBackground={hasBackground}
              isMobile={isMobileView}
            />
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default NavigationBarExperiment;
