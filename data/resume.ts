import { personalStatement } from "./paragraphs"
import { contactData } from "./contact"
import { EducationItem, ExperienceItem, ResumeData, SkillGroupItem } from "./types"
import links from "./links"

const skills: SkillGroupItem[] = [
  {
    title: "Programming languages",
    details: "Java, JavaScript, TypeScript, Rust, Python, HTML/CSS, SQL",
  },
  {
    title: "Concepts",
    details: "Web, Design Patterns, Operating Systems, Functional Programming, CI/CD, Microservices, Cloud, AI/Deep Learning, Event-Driven Programming, Test-Driven development",
  },
  {
    title: "Platforms and tools",
    details: "Node.js, Spring, React, Salesforce, Angular, Vue, MySQL, Firebase, Redis, Git, Docker"
  },
  {
    title: "Quick comprehension",
    details: "Able to learn new languages, frameworks and concepts in a matter of days and internalising concepts.",
  },
  {
    title: "Articulation",
    details: "Ability to condense information and ideas for effective communication, documentation, brainstorming and interacting with LLMs",
  },
  {
    title: "Adaptability",
    details: "Being a lifelong learner, proficient in working with emerging technologies, ensuring that I stay relevant and useful in a world of constant change and disruption.",
  },
  {
    title: "Foresight",
    details: "Proactive in anticipating future problems and complexities and writing resilient, maintainable code",
  },
]

const experiences: ExperienceItem[] = [
  {
    company: "Freelance Work",
    jobTitle: "Fullstack Developer",
    dates: "May 2022 ‐ Present",
    details: [
      {
        title: "Real-time price chart with complex requirements",
        description: "Led the development of frontend charts with custom algorithms for efficient fetching, merging, and zooming, backed by rigorous testing"
      },
      {
        title: "Event-sourcing-based backend features",
        description: "Took ownership, designed and implemented Spring Boot code, modelling complex business events to generate actionable statistics for data-driven decision-making"
      },
      {
        title: "Code quality",
        description: "Identifying code organisation issues and fixing critical parts to improve development experience and performance substantially"
      },
      {
        title: "Bug fixing",
        description: "Fixed hundreds of bugs, within short time (usually within a day), looking for root causes and noticing technical debts and handling them"
      }
    ],
  },
  {
    company: "Virtusa",
    jobTitle: "Software Engineer",
    dates: "Feb 2019 ‐ Apr 2021",
    details: [
      {
        title: "Prototypes/MVPs/Proof of Concepts",
        description: "Delivered fully interactive prototypes on Salesforce UI platform to A/B testing in taking very short time (2-5 days)"
      },
      {
        title: "Backend design",
        description: "Worked on a Salesforce instance with 20+ domain models, adding complicated validations and trigger handling while being mindful of platform constraints"
      },
      {
        title: "Implemented DevOps processes for the Salesforce code and configurations",
        description: "Researched on how to do version controlling, testing, code reviewing considering unique restraints of the Salesforce development platform. Gave a plan on how to incrementally implement the ideas into the workflow"
      },
      {
        title: "Cloud Components",
        description: "Used Microsoft Azure tools to synchronize data between enterprise systems while handling failures and system inconsistencies"
      },
      {
        title: "Data",
        description: "Generated reports from complex data models for business decisions and ran data transformations"
      }
    ],
  },
  {
    company: "Eyepax IT Consulting",
    jobTitle: "Intern Software Engineer",
    dates: "Jun 2017 ‐ Nov 2017",
    details: [
      {
        title: "Built a MVP for a  single page application",
        description: "Single-handedly built complete B2B prototype application with business listing, booking and calendar view with Node.js and Angular"
      },
      {
        title: "Real time data collection and display",
        description: "Used Web Extension API to create a web extension that captures changes to data on a certain website and displays the changes in a real-time interactive website. Used Vue.js and Firebase real-time database"
      }
    ],
  },
]

const education: EducationItem[] = [
  {
    title: "Bachelor’s Degree",
    details: [
      "University of Moratuwa, Sri Lanka",
      "B. Sc. (Hons) in Engineering",
      "Computer Science and Engineering",
      "GPA 3.5",
    ]
  },
  {
    title: "High school achievements",
    details: [
      "AL is an extremely competitive exam tens of thousands of people take in the country and I was ranked 113 for Physics, Chemistry and Mathematics."
    ]
  }
]

const interests: string[] = [
  "Reading fiction and non-fiction (on Economics, History, Geopolitics, etc.)",
  "Puzzle games",
  "Linguistics (know French, German and Hindi to varying levels)",
  "Fitness (weight training, nutrition, cycling)"
]

const resume: ResumeData= {
  name: "Sivakar Sithamparanathan",
  contact: contactData,
  links: links,
  personalStatement,
  skills,
  experiences,
  education,
  interests,
}

export default resume;