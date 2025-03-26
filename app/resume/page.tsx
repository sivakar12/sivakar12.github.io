import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

// Load content at build time
const resumeContent = fs.readFileSync(
  path.join(process.cwd(), 'data', 'resume.md'),
  'utf8'
);

const ResumePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 className="text-3xl font-semibold mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
            ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
            li: ({ children }) => <li className="mb-2">{children}</li>,
            p: ({ children }) => <p className="mb-4">{children}</p>,
            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          }}
        >
          {resumeContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ResumePage;