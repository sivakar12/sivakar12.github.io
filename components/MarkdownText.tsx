import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';

const CustomParagraph: Components['p'] = ({ children, ...props }) => (
  <p style={{ margin: '0.25em 0' }} {...props}> {/* Reduced margin */}
    {children}
  </p>
);

interface CustomListProps {
  depth: number;
  children?: React.ReactNode; // Make `children` optional
}

const CustomList: React.FC<CustomListProps> = ({ depth, children }) => (
  <ul style={{ margin: '0.25em 0', paddingLeft: `${depth * 20}px`, listStyleType: 'none' }}>
    {children}
  </ul>
);

const CustomListItem: Components['li'] = ({ children, ...props }) => (
  <li style={{ margin: '0.25em 0' }} {...props}> {/* Reduced margin */}
    <span style={{ marginRight: '8px' }}>—</span> {/* Long dash as bullet */}
    {children}
  </li>
);

interface MarkdownTextProps {
  markdownContent: string;
}

export default function MarkdownText({ markdownContent }: MarkdownTextProps) {
  return (
    <ReactMarkdown
      components={{
        p: CustomParagraph,
        ul: ({ node, ...props }) => {
          // Calculate depth based on the column position in the Markdown source
          const depth = node?.position?.start.column || 0; // Use optional chaining
          return <CustomList depth={Math.floor(depth / 2)} {...props} />;
        },
        li: CustomListItem,
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
}