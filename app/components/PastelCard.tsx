import React, { ReactNode } from 'react';

interface PastelCardProps {
  children: ReactNode;
  className?: string;
}

const PastelCard: React.FC<PastelCardProps> = ({ children, className = '' }) => {
  // Function to generate a random light, vibrant, and pleasant pastel color
  const getRandomVibrantPastelColor = (): string => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 60; // 60-90%
    const lightness = Math.floor(Math.random() * 15) + 75; // 75-90%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return (
    <div 
      className={`
        rounded-lg shadow-md
        transition-all duration-300 ease-in-out
        hover:shadow-lg
        ${className}
      `}
      style={{ backgroundColor: getRandomVibrantPastelColor() }}
    >
      {children}
    </div>
  );
};

export default PastelCard;