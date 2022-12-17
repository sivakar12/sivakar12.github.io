import fs from "fs"
import matter from "gray-matter"
import { Card, Image, Item, Label, List } from "semantic-ui-react"

type Project = {
  title: string;
  slug: string;
  emoji: string;
  date: string;
  summary: string;
  tags: string[];
}

export async function getStaticProps() {
  const files = fs.readdirSync(process.cwd() + "/content/projects")
  const mdFiles = files.filter((f) => f.endsWith(".md"));

  const projects = mdFiles.map((f) => {
    const file = fs.readFileSync(process.cwd() + "/content/projects/" + f);
    const { data } = matter(file);
    return { 
      ...data,
      slug: f.replace(".md", ""),
    };

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

        {/* <Item.Group link>
          {projectsOrdered.map((p) => (
            <Item key={p.title} href={`projects/${p.slug}`}>
              <Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
              <Item.Content>
                <Item.Header>{p.emoji} {p.title}</Item.Header>
                <Item.Description>{p.summary}</Item.Description>
                <Item.Extra>
                  {p.tags.map((t) => (<Label>{t}</Label>))}
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group> */}
        <Card.Group link>
          {projectsOrdered.map((p) => (
            <Card key={p.title} href={`projects/${p.slug}`}>
              <Card.Content>
                <Card.Header>{p.emoji} {p.title}</Card.Header>
                <Card.Description>{p.summary}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <List celled horizontal link>
                  {p.tags.map((t) => (<List.Item key={t}>{t}</List.Item>))}
                </List>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
    </div>
  );
}