import fs from "fs"
import matter from "gray-matter"

type Project = {
  title: string;
  emoji: string;
  date: string;
  summary: string;
}

export async function getStaticProps() {
  const files = fs.readdirSync(process.cwd() + "/content/projects")
  const mdFiles = files.filter((f) => f.endsWith(".md"));
  // return {
  //   props: {
  //     projects: JSON.parse(JSON.stringify(mdFiles.map((f) => { title: f }))),
  //   }
  // }
  const projects = mdFiles.map((f) => {
    const file = fs.readFileSync(process.cwd() + "/content/projects/" + f);
    const { data } = matter(file);
    return data;

  });
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
  };
}
export default function Projects({ projects }: { projects: Project[] }) {
  const projectsOrdered = projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
        <h1>Projects</h1>
        <p>Here are some of my projects</p>

        <ul>
          {projectsOrdered.map((p) => (
            <li key={p.title}>{p.emoji} {p.title} - {p.date} </li>
          ))}
        </ul>
    </div>
  );
}