import fs from 'fs';
import path from 'path';
import ResumePage from '@/components/layout/ResumePage';

// Load content at build time
const resumeContent = fs.readFileSync(
  path.join(process.cwd(), 'data', 'resume.md'),
  'utf8'
);

export default function Resume() {
  return <ResumePage resumeContent={resumeContent} />;
}