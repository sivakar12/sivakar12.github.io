import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export async function getStaticPaths() {
    const files = fs.readdirSync(process.cwd() + "/content/projects")
    const mdFiles = files.filter((f) => f.endsWith(".md"));
    
    const slugs = mdFiles.map(f => f.replace(".md", ""));
    
    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const file = fs.readFileSync(process.cwd() + "/content/projects/" + params.slug + ".md");
    const { data, content } = matter(file);
    return {
        props: {
            data: JSON.parse(JSON.stringify(data)),
            content,
        },
    };
}

export default function Project({ data, content }: any) {
    return (
        <div>
            <h1>{data.title}</h1>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </div>
    );
}