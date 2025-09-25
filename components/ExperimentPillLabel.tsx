interface ExperimentPillLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function ExperimentPillLabel({ 
  children, 
  className = "" 
}: ExperimentPillLabelProps) {
  return (
    <div 
      className={`text-lg font-semibold text-gray-900 mb-4 ${className}`}
      style={{ fontFamily: "'Merriweather', serif" }}
    >
      {children}
    </div>
  );
}
