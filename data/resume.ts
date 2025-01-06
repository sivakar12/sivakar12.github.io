import { personalStatement } from "./paragraphs"
import contact from "./contact"
import { EducationItem, ExperienceItem, ResumeData, SkillGroupItem } from "./types"
import links from "./links"

const skills: SkillGroupItem[] = [
  {
    title: "Programming languages",
    details: "Java, JavaScript, TypeScript, Rust, Python, HTML/CSS, SQL",
  },
  {
    title: "Concepts",
    details: "Web, Design Patterns, Relational and Non-relational Databases, Operating Systems, Functional Programming, CI/CD, Microservices, Cloud, AI/Deep Learning, Event-Driven Programming, Test-Driven development",
  },
  {
    title: "Platforms and tools",
    details: "Node.js, Spring, React, Salesforce, Angular, Vue, MySQL, Firebase, Redis, InfluxDB, Git, Docker"
  },
  {
    title: "Transferable skills",
    details: "Quick comprehension, Articulation, Adaptability, Foresight"
  }
]

const experiences: ExperienceItem[] = [
  {
    company: "Freelance Work",
    jobTitle: "Fullstack Developer",
    dates: "May 2022 ‐ Present",
    details: [
      {
        title: "Real-time data visualizations of financial data",
        description: "Extended React charting libraries with new features to fulfill advanced requirements that is crucial for the launch of the product with latency being less that 1 second."
      },
      {
        title: "Business statistics from event sourcing",
        description: "Designed and implemented end-to-end features using Spring Boot, PostgresSQL and React code for data-driven decision-making that increased business efficiency by 30%."
      },
      {
        title: "Optimizations to codebase",
        description: "Identifying and fixing code organization issues, designing testing strategies and streamlining build process, migrating ot new libraries/frameworks to improve developer productivity at least fivefold."
      }
    ],
  },
  {
    company: "Virtusa",
    jobTitle: "Software Engineer",
    dates: "Feb 2019 ‐ Apr 2021",
    details: [
      {
        title: "Platform-constrained backend computations",
        description: "Programmed backend computations on Salesforce instance ensuring strict compliance with platform compute limits including complex validations and triggers."
      },
      {
        title: "Modernizing UI components",
        description: "Designing modern, intuitive SPAs on Salesforce framework (similar to Angular) that reduced user interaction time by 80% by avoiding page loads."
      },
      {
        title: "CI/CD workflow research",
        description: "After noticing recurring time-consuming tasks, presented a CI/CD workflow strategy for Salesforce applications, addressing unique characteristics of the platform."
      },
      // {
      //   title: "Cloud Components",
      //   description: "Used Microsoft Azure tools to synchronize data between enterprise systems while handling failures and system inconsistencies"
      // },
      // {
      //   title: "Data",
      //   description: "Generated reports from complex data models for business decisions and ran data transformations"
      // }
    ],
  },
  {
    company: "Eyepax IT Consulting",
    jobTitle: "Intern Software Engineer",
    dates: "Jun 2017 ‐ Nov 2017",
    details: [
      {
        title: "Angular MVP development",
        description: "Single-handedly developed a B2B appointment system featuring business listings, bookings, and calendar views using Node.js and Angular to convince clients to use SPAs."
      },
      {
        // title: "Real time data collection and display",
        // description: "Used Web Extension API to create a web extension that captures changes to data on a certain website and displays the changes in a real-time interactive website. Used Vue.js and Firebase real-time database"
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
  contact,
  links: links,
  personalStatement,
  skills,
  experiences,
  education,
  interests,
}

export default resume;