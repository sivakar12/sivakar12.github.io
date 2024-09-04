import { ProjectItem } from "./types";

const projects: ProjectItem[] = [
  {
    title: "Copy Queue",
    date: "2023-07-12",
    shortDescription: "A cross-platform Desktop app for better copy-pasting experience",
    longDescriptionMarkdown: `
A better UI/UX for those who copy and paste a lot of files and folders.

Problems with using the OS's file manager to copy and paste
- Parallel copy is slow operation
  - You can choose speed but then you have to wait for one operation to finish before starting the next
  - Or, you can start the next while copying is in progress and all operations slow down.
- Too many windows are open. You go back and forth. Context switching is mentally taxing.

Here, we make choosing source, choosing destination and running the copying independent operations. Operations are added to the queue. Only one operation runs at one point.
    `,
    screenshotUrls: [
      'projects-screenshots/copy-queue-1.png',
      'projects-screenshots/copy-queue-2.png',
    ],
    links: [
      {
        title: "Repository",
        url: "https://github.com/sivakar12/copy-queue",
      },
    ]
  },
  {
    title: "Eye Refresh",
    date: "2022-01-28",
    shortDescription: "Android app that sends reminders for 20-20-20 rule for reducing eye strain",
    longDescriptionMarkdown: `
20-20-20 rule is a solution to reducing eye strain when one looks at screens for long. Every twenty minutes, you look at someting twenty feet away for twenty seconds.

I made an Android app that sends reminders every twenty minutes. The reminders can be paused, snoozed, and acted upon. There is a timer for the twenty-second-refersh as well.

I made use of state diagram to get the design done. I am using a database (Room on top of SQLite) to store the state transitions). That is the source of truth for state. Actions can be taken from the Activity or the Notification buttons. There is a Broadcast receiver listening for notification actions. Alarm manager is used to schedule notifications which also uses this broadcast receiver.

I used Google's brand new Material You to get the UI styles.

I learned Android four or five years ago. I have forgotten a lot and a lot has changed since then. I got to brush up on my Android knowledge doing this.
    `,
    screenshotUrls: [
      'projects-screenshots/eye-refresh-1.png',
      'projects-screenshots/eye-refresh-2.png',
      'projects-screenshots/eye-refresh-3.png',
      'projects-screenshots/eye-refresh-4.png',
    ],
    links: [
      {
        title: "Repository",
        url: "https://github.com/sivakar12/EyeRefresh"
      }
    ],
  },
  {
    title: "Wordle Clone",
    date: "2022-01-17",
    shortDescription: "Made a clone on viral Wordle game in 5 hours",
    longDescriptionMarkdown: `
I wanted to see how quickly I can make a clone of the Wordle game that went viral. Used React and vanilla CSS and coded it in under five hours.
    `,
    screenshotUrls: [
      'projects-screenshots/wordle-1.png',
      'projects-screenshots/wordle-2.png',
      'projects-screenshots/wordle-3.png',
    ],
    links: [
      {
        title: "Repository",
        url: "https://github.com/sivakar12/wordle-clone"
      },
      {
        title: "Live App",
        url: "https://wordle-sivakar12.netlify.app/"
      }
    ],
  },
  {
    title: "Small Wins",
    date: "2021-11-03",
    shortDescription: "A React Native application to track progress of building new habits",
    longDescriptionMarkdown: `
Instant gratification is what makes you keep building habits. I want to make an app to keep count of doing good things. Seeing progress gives you the happy chemicals. That motivate you to keep doing. I have been using a counter app myself for my own progrss. And I use this app called Forest for counting productive time. I took the data visualizations inspiration from that.

This is my first time doing a React Native project. Expo provided me with the development environment convenience. 

I wanted to keep this minimal. I had only two screens. I didn't use custom routing. I added the menubar myself. I wanted to have punchy colors for this to look inviting. I did the basic styling provided by React Native. I made good use of flex. I broke up the code in a common sense way, not following any templates because this is a small project. 

I am not using a database at the moment. The whole data is stored as a JSON string that is loaded onto memory on start. Because this is always on kilobyte range, I really don't see a need to add the complexity of a database and scheme to the project. Reading is fast on modern smartphones, and memory is also abundant. I have added exporing and importing data feature to backup the data, cloud sync can be added later.
    `,
    screenshotUrls: [
      'projects-screenshots/habit-builder-1.png',
      'projects-screenshots/habit-builder-2.png',
      'projects-screenshots/habit-builder-3.png',
    ],
    links: [
      {
        title: "Repository",
        url: "https://github.com/sivakar12/small-wins"
      },
      {
        title: "Hosted on Expo platform",
        url: "exp://exp.host/@sivakar12/small-wins"
      }
    ],
  },
  {
    title: "File Change Count VS Code Extension",
    date: "2021-10-16",
    shortDescription: "An extension that shows how many times a file has changed in its Git history, to figure out the important files in a project",
    longDescriptionMarkdown: `
When looking at a new code repository, you may want to know what are the important files of the project. One heuristic to know what the important files are is by looking at how many modifications that particular file has been through. 

I have made a Visual Studio Code extension that looks at the Git history and count how many times each file has gone through a change. I propagate this up the file tree as well. There is another file tree panel next to the standard one that shows this tree.
    `,
    screenshotUrls: [
      'projects-screenshots/file-change-count-extension-1.jpg'
    ],
    links: [
      {
        title: "Repository",
        url: "https://github.com/sivakar12/file-change-count-vscode-extension"
      },
      {
        title: "Extension in Visual Studio Marketplace",
        url: "https://marketplace.visualstudio.com/items?itemName=sivakar12.file-change-count"
      }
    ],
  },
  {
    title: "Elm Minesweeper",
    date: "2021-10-06",
    shortDescription: "Built this Minesweeper game clone using Elm languange while learning the language and functional style of programming",
    longDescriptionMarkdown: `
I have for a long time been fascinated by functional programming. I have never done a full project with functional style, using only immutable data structures, pure functions etc. So I took this as a challenge to see how I can model this game under functional constraints. I learned the systax, which is a lot of work but also very rewarding. 

I made use of flex methods to style thing properly. The height and width can be changed and everything stayed centered an in layout. I used emojis for the icons to keep it basic.
    `,
    screenshotUrls: [
      'projects-screenshots/elm-minesweeper-1.png',
      'projects-screenshots/elm-minesweeper-2.png',
      'projects-screenshots/elm-minesweeper-3.png',
    ],
    links: [
      {
        title: "Repository",
        url: "https://github.com/sivakar12/elm-minesweeper"
      },
      {
        title: "Live site",
        url: "https://elm-minesweeper-sivakar12.netlify.app/"
      }
    ],
  },
  {
    title: "Rust Exercises in Exercism",
    date: "2021-10-04",
    shortDescription: "Rust code I wrote for the excercises from the coding practice website Exercism",
    longDescriptionMarkdown: `
I did some exercises in the website Exercism while learning the Rust language. I wrote idiomatic Rust code, following 
best practices. The website had mentors who helped me improve the code further. It was a good place to learn by doing.
    `,
    screenshotUrls: [],
    links: [
      {
        "title": "Repository",
        "url": "https://github.com/sivakar12/exercism-solutions"
      },
      {
        "title": "Exercism profile",
        "url": "https://exercism.org/profiles/sivakar12"
      }
    ],
  },
  {
    title: "Phrasal Verbs React SPA",
    date: "2021-09-03",
    shortDescription: "Single Page Web Application to practice phrasal verbs, question-answer way",
    longDescriptionMarkdown: `
Spaced repition is a really effective technique. I used an app called Memrise to learn a lot of vocabulary. I wanted to do something 
like that. I wanted to add a little bit of intelligence. 

I had a question answer dataset. The dataset had only one question and one answer. I used NLP to figure out the answers that could be close to the correct answer. So the options provided are quite similar. This is done by finding the similaries in a Jupyter Notebook
    `,
    screenshotUrls: [
      'projects-screenshots/phrasal-verbs-1.png',
      'projects-screenshots/phrasal-verbs-2.png',
      'projects-screenshots/phrasal-verbs-3.png',
    ],
    links: [],
  },
  {
    title: "Seattle AirBnB Data Analytics",
    date: "2021-07-21",
    shortDescription: "Analysing a dataset and presenting findings as part of Udacity Data Scientist Nanodegree",
    longDescriptionMarkdown: `
A data exploration blog post I am doing as part of the Udacity Data Scientist Nanodegree This is a dataset of AirBnB listings in Seattle. It has details about the prices, ratings, host information, amenities provided by the property etc. I looked at the amenities provided and also see how they react with price and ratings. 

Used popular data science tools like Pandas, Matplotlib, Scikit-Learn etc. There is a Jupyter Notebook and a Gatsby site with 
the blog post
    `,
    screenshotUrls: [],
    links: [
      {
        title: "Repository",
        url: "https://github.com/sivakar12/seattle-airbnb-nanodegree-project"
      },
      {
        title: "Jupyter Notebook",
        url: "https://github.com/sivakar12/seattle-airbnb-nanodegree-project/blob/main/CRISP-DM.ipynb"
      },
      {
        title: "Blog Post",
        url: "https://sivakar12.github.io/seattle-airbnb-nanodegree-project/seattle-airbnb/"
      }
    ],
  },
  {
    title: "Diaster Response ML Pipeline - Udacity",
    date: "2021-07-07",
    shortDescription: "A multilabel classification model I built as part of Udacity Data Scientist Nanodegree",
    longDescriptionMarkdown: `
This is a project I am doing as part of the Udacity Data Scientist Nanodegree program The core of this project is a machine learning classifier that reads messages coming during a disaster and classifies them into categories so they can be routed to the appropriate responder.

It is a multilabel classification. The classification uses Bag of Words and TF-IDF techniques to model the text and there are data cleaning, tokenizing, stemming and lemmatizing tasks. The classifier is built making use of the pipeline features of Scikit Learn and Grid Search Cross Validation is used to tune the parameters
    `,
    screenshotUrls: [],
    links: [
      {
        title: "Repository",
        url: "https://github.com/sivakar12/udacity-disaster-response-ml-project"
      },
      {
        title: "Jupyter Notebook",
        url: "https://github.com/sivakar12/udacity-disaster-response-ml-project/blob/main/Exploration.ipynb"
      }
    ],
  },
  {
    title: "CS Concepts Mind Dumps",
    date: "2020-08-17",
    shortDescription: "A blog with an experimental style of writing, to try out the Feynman's advice",
    longDescriptionMarkdown: `
An experimental style of writing where I try to dump everything in my mind about random topics. This is a free flow of ideas with no structure or organization which can be written quickly - I usually set a timer for ten minutes and do it like brainstorming. These are not accurate and often I make guesses how things work a lot here. It is also inspired by the Feynman Technique of learning by explaining to others
    `,
    screenshotUrls: [
      'projects-screenshots/cs-concepts-mind-dumps.jpeg'
    ],
    links: [
      {
        title: "Site",
        url: "https://cs-mind-dumps-sivakar12.netlify.app"
      }
    ],
  },
  {
    title: "Electron File Manager",
    date: "2018-04-19",
    shortDescription: "File manager built on Electron and React using modern HTML/CSS/Js tools with multi tabs",
    longDescriptionMarkdown: `
I wanted to have a file manager with multiple tabs because Windows didn't have one. I wanted to make use of the full suite of tools modern web development offered.

When I am doing file transfers, there are always multiple explorer windows open alongside many copy progress dialogs. I wanted to add tabs and then also make multiple parallel copy paste dialogs. (The copy paste thing is still not implemented)
    `,
    screenshotUrls: [
      'projects-screenshots/electron-file-manager-1.png',
      'projects-screenshots/electron-file-manager-2.png',
      'projects-screenshots/electron-file-manager-3.png',
    ],
    links: [],
  },
];

export default projects;