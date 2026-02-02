import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import { join } from 'path';
import ExperimentHeader from '@/components/ExperimentHeader';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const experimentsDirectory = join(process.cwd(), 'app/design-playground/experiments');
  const filenames = await fs.readdir(experimentsDirectory);
  
  return filenames
    .filter((name) => name.endsWith('.tsx'))
    .map((name) => ({
      id: name.replace(/\.tsx$/, ''),
    }));
}

export default async function ExperimentPage({ params }: PageProps) {
  const { id } = await params;
  
  // Try to import the experiment component
  let ExperimentComponent;
  try {
    const experimentPath = join(process.cwd(), 'app/design-playground/experiments', `${id}.tsx`);
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

  const experimentNumber = id.split('-')[0];
  const displayName = id
    .split('-')
    .slice(1) // Remove the number prefix
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-gray-50">
      <ExperimentHeader 
        experimentNumber={experimentNumber}
        experimentName={displayName} 
      />
      
      {/* Experiment Content */}
      <div className="max-w-6xl mx-auto p-8">
        <ExperimentComponent />
      </div>
    </div>
  );
}
