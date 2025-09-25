import Link from 'next/link';
import ExperimentTitle from './ExperimentTitle';

interface ExperimentHeaderProps {
  experimentNumber: string;
  experimentName: string;
  backHref?: string;
}

export default function ExperimentHeader({ 
  experimentNumber,
  experimentName, 
  backHref = "/design-playground" 
}: ExperimentHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="max-w-6xl mx-auto flex items-center">
        <Link 
          href={backHref} 
          className="mr-6 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Go back"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </Link>
        <ExperimentTitle variant="header">
          {experimentNumber} {experimentName}
        </ExperimentTitle>
      </div>
    </div>
  );
}
