interface ExperimentTitleProps {
  children: React.ReactNode;
  variant?: 'page' | 'header';
  className?: string;
}

export default function ExperimentTitle({ 
  children, 
  variant = 'page',
  className = ""
}: ExperimentTitleProps) {
  const baseClasses = "text-4xl sm:text-5xl font-bold text-gray-900";
  const variantClasses = {
    page: "mb-8",
    header: ""
  };
  
  const containerClasses = {
    page: "max-w-4xl mx-auto",
    header: "max-w-6xl mx-auto"
  };

  return (
    <h1 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ fontFamily: "'Merriweather', serif" }}
    >
      {children}
    </h1>
  );
}
