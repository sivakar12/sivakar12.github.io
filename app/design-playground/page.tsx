'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ExperimentTitle from '@/components/ExperimentTitle';

// Load Google Fonts function
const loadGoogleFonts = (fonts: string[]) => {
  if (typeof window !== 'undefined') {
    fonts.forEach(font => {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}:wght@400;600;700&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
  }
};

export default function DesignSystemPage() {
  const [experimentFiles, setExperimentFiles] = useState<string[]>([]);

  // Load Merriweather font on mount
  useEffect(() => {
    loadGoogleFonts(['Merriweather']);
    
    // Get experiment files
    const files = [
      '001-font-options.tsx',
      '002-website-personality.tsx', 
      '003-home-layouts.tsx',
      '004-navigation-bar.tsx'
    ];
    
    setExperimentFiles(files.sort((a, b) => {
      const numA = a.split('-')[0];
      const numB = b.split('-')[0];
      return parseInt(numB) - parseInt(numA);
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <ExperimentTitle variant="page">
          Design Playground
        </ExperimentTitle>
        
        <div className="space-y-12">
          {experimentFiles.map((file) => {
            const experimentId = file.replace('.tsx', '');
            const experimentNumber = file.split('-')[0];
            const displayName = experimentId
              .split('-')
              .slice(1) // Remove the number prefix
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            
            return (
              <Link
                key={experimentId}
                href={`/design-playground/${experimentId}`}
                className="block border-l-8 border-black bg-gray-50 p-8 hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl sm:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>
                  {experimentNumber} {displayName}
                </div>
              </Link>
            );
          })}
        </div>
        
        {experimentFiles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500" style={{ fontFamily: "'Merriweather', serif" }}>No experiments found. Add some experiment files to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
