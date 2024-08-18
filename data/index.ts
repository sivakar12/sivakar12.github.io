import { bigBio, personalStatement } from "./paragraphs";
import projects from "./projects";
import settings from "./settigns";
import resume from "./resume";
import articles from "./articles";
import { contactData, linksData } from "./contact";

const data: PersonalWebsiteData = {
  name: "Sivakar Sithamparanathan",
  title: "Software Engineer | Fullstack Developer",
  bigBio,
  smallBio: "I am a software developer with a degree in engineering and a proven track record of working with diverse technologies. As a quick learner and first-principles thinker, I approach coding with creativity, organization, and discipline. My communication style is organic and authentic, fostering effective team collaboration. I am seeking challenging opportunities where I can grow and make meaningful contribution.",
  contact: contactData,
  photoUrl: "profile.jpeg",
  resume,
  projects,
  articles,
  settings,
}

export default data;