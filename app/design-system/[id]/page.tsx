import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import { join } from 'path';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ExperimentPage({ params }: PageProps) {
  const { id } = await params;
  
  // Try to import the experiment component
  let ExperimentComponent;
  try {
    const experimentPath = join(process.cwd(), 'app/design-system/experiments', `${id}.tsx`);
    await fs.access(experimentPath);
    
    // Dynamic import of the experiment component
    const experimentModule = await import(`../experiments/${id}.tsx`);
    ExperimentComponent = experimentModule.default;
  } catch (error) {
    notFound();
  }

  if (!ExperimentComponent) {
    notFound();
  }

  const displayName = id
    .split('-')
    .slice(1) // Remove the number prefix
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <Link 
              href="/design-system" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Back to Design System
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              {displayName}
            </h1>
          </div>
          <div className="text-sm text-gray-500">
            Experiment ID: {id}
          </div>
        </div>
      </div>

      {/* Experiment Content */}
      <div className="max-w-6xl mx-auto p-8">
        <ExperimentComponent />
      </div>
    </div>
  );
}
