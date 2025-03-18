import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CSNote } from '@/types/CsNote';


const csNotesDir = path.join(process.cwd(), 'data', 'cs-notes');

export function getAllCSNotes(): CSNote[] {
    const fileNames = fs.readdirSync(csNotesDir);
    const mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));

    const csNotes = mdFiles.map((fileName) => {
        const id = fileName.replace('.md', '');
        const filePath = path.join(csNotesDir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

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
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return {
        id,
        title: data.title,
        content
    }
}