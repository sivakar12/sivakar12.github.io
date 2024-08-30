import React from 'react';
import ReactMarkdown from 'react-markdown';

const CustomParagraph: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <p style={{ marginTop: '0.5em', marginBottom: '0.5em' }}>{children}</p>
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