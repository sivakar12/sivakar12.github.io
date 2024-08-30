import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';

const CustomParagraph: Components['p'] = ({ children, ...props }) => (
  <p style={{ marginBottom: '1em' }} {...props}>
    {children}
  </p>
);

interface MarkdownTextProps {
  markdownContent: string;
}

export default function MarkdownText({ markdownContent }: MarkdownTextProps) {
  return (
    <ReactMarkdown
      components={{
        p: CustomParagraph
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
}