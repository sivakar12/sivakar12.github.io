import { promises as fs } from 'fs';
import { join } from 'path';
import Link from 'next/link';

export default async function DesignSystemPage() {
  const experimentsDir = join(process.cwd(), 'app/design-system/experiments');
  
  let experimentFiles: string[] = [];
  try {
    const files = await fs.readdir(experimentsDir);
    experimentFiles = files
      .filter(file => file.endsWith('.tsx'))
      .sort((a, b) => {
        // Extract number from filename (e.g., "001-font-options.tsx" -> "001")
        const numA = a.split('-')[0];
        const numB = b.split('-')[0];
        return parseInt(numB) - parseInt(numA); // Reverse chronological order
      });
  } catch (error) {
    console.error('Error reading experiments directory:', error);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Design System Experiments
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Experimenting with different design elements for the personal website.
        </p>
        
        <div className="grid gap-6">
          {experimentFiles.map((file) => {
            const experimentId = file.replace('.tsx', '');
            const displayName = experimentId
              .split('-')
              .slice(1) // Remove the number prefix
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            
            return (
              <Link
                key={experimentId}
                href={`/design-system/${experimentId}`}
                className="block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {displayName}
                </h2>
                <p className="text-gray-600">
                  Experiment ID: {experimentId}
                </p>
              </Link>
            );
          })}
        </div>
        
        {experimentFiles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No experiments found. Add some experiment files to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
