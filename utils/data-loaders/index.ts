import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article } from '@/types/Article';
import { CSNote } from '@/types/CsNote';

// Shared utility function
function readMarkdownFile(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return matter(fileContent);
}

// Articles data loader
const articlesFolder = path.join(process.cwd(), 'data', 'articles');

export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesFolder);
  const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

  const articles = mdFiles.map((fileName) => {
    const id = fileName.replace('.md', '');
    const filePath = path.join(articlesFolder, fileName);
    const { data, content } = readMarkdownFile(filePath);

    return {
      id,
      title: data.title,
      date: data.date,
      hidden: data.hidden,
      shortDescription: data.shortDescription,
      content
    }
  }).filter(article => article.content && article.title);

  return articles;
}

export function getArticleById(id: string): Article {
  const filePath = path.join(articlesFolder, `${id}.md`);
  const { data, content } = readMarkdownFile(filePath);
  return {
    id,
    title: data.title,
    date: data.date,
    hidden: data.hidden,
    shortDescription: data.shortDescription,
    content
  }
}

// CS Notes data loader
const csNotesDir = path.join(process.cwd(), 'data', 'cs-notes');

export function getAllCSNotes(): CSNote[] {
  const fileNames = fs.readdirSync(csNotesDir);
  const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

  const csNotes = mdFiles.map((fileName) => {
    const id = fileName.replace('.md', '');
    const filePath = path.join(csNotesDir, fileName);
    const { data, content } = readMarkdownFile(filePath);

    return {
      id,
      title: data.title,
      content
    }
  }).filter(note => note.content && note.title);

  return csNotes;
}

export function getCSNoteById(id: string): CSNote {
  const filePath = path.join(csNotesDir, `${id}.md`);
  const { data, content } = readMarkdownFile(filePath);
  return {
    id,
    title: data.title,
    content
  }
} 