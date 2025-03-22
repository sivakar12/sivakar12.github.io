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

const CustomHeading1: Components['h1'] = ({ children, ...props }) => (
  <h1 style={{ 
    fontSize: '2em',
    fontWeight: 600,
    margin: '1em 0 0.5em',
    color: '#2d3748'
  }} {...props}>
    {children}
  </h1>
);

const CustomHeading2: Components['h2'] = ({ children, ...props }) => (
  <h2 style={{ 
    fontSize: '1.5em',
    fontWeight: 600,
    margin: '0.83em 0 0.5em',
    color: '#2d3748'
  }} {...props}>
    {children}
  </h2>
);

const CustomHeading3: Components['h3'] = ({ children, ...props }) => (
  <h3 style={{ 
    fontSize: '1.17em',
    fontWeight: 600,
    margin: '0.67em 0 0.5em',
    color: '#4a5568'
  }} {...props}>
    {children}
  </h3>
);

const CustomHeading4: Components['h4'] = ({ children, ...props }) => (
  <h4 style={{ 
    fontSize: '1em',
    fontWeight: 600,
    margin: '0.5em 0',
    color: '#4a5568'
  }} {...props}>
    {children}
  </h4>
);

interface MarkdownTextProps {
  markdownContent: string;
}

export default function MarkdownText({ markdownContent }: MarkdownTextProps) {
  return (
    <ReactMarkdown
      components={{
        h1: CustomHeading1,
        h2: CustomHeading2,
        h3: CustomHeading3,
        h4: CustomHeading4,
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