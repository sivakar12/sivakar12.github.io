import ReactMarkdown from 'react-markdown';
import PageContainer from '@/components/layout/PageContainer';

// Helper function to get animation delay based on element type
const getAnimationDelay = (elementType: string) => {
  const baseDelays: { [key: string]: number } = {
    h1: 0,
    h2: 100,
    h3: 200,
    p: 300,
    ul: 400,
    li: 500
  };
  return baseDelays[elementType] || 0;
};

interface ResumePageProps {
  resumeContent: string;
}

export default function ResumePage({ resumeContent }: ResumePageProps) {
  return (
    <PageContainer className="max-w-4xl py-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 
                className="text-3xl font-semibold mb-4 animate-card-entrance text-gray-900"
                style={{ animationDelay: `${getAnimationDelay('h1')}ms` }}
              >
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 
                className="text-2xl font-semibold mt-8 mb-4 animate-card-entrance text-gray-800"
                style={{ animationDelay: `${getAnimationDelay('h2')}ms` }}
              >
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 
                className="text-xl font-semibold mt-6 mb-3 animate-card-entrance text-gray-700"
                style={{ animationDelay: `${getAnimationDelay('h3')}ms` }}
              >
                {children}
              </h3>
            ),
            ul: ({ children }) => (
              <ul 
                className="list-disc pl-6 mb-4 animate-card-entrance text-gray-600"
                style={{ animationDelay: `${getAnimationDelay('ul')}ms` }}
              >
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li 
                className="mb-2 animate-card-entrance text-gray-600"
                style={{ animationDelay: `${getAnimationDelay('li')}ms` }}
              >
                {children}
              </li>
            ),
            p: ({ children }) => (
              <p 
                className="mb-4 animate-card-entrance text-gray-600"
                style={{ animationDelay: `${getAnimationDelay('p')}ms` }}
              >
                {children}
              </p>
            ),
            strong: ({ children }) => <strong className="font-semibold text-gray-800">{children}</strong>,
          }}
        >
          {resumeContent}
        </ReactMarkdown>
      </div>
    </PageContainer>
  );
} 