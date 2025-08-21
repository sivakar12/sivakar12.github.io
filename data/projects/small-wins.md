---
title: "Small Wins"
emoji: "🏅"
date: "2021-11-03"
shortDescription: "A React Native application to track progress of building new habits"
screenshotUrls:
  - 'projects-screenshots/habit-builder-1.png'
  - 'projects-screenshots/habit-builder-2.png'
  - 'projects-screenshots/habit-builder-3.png'
links:
  - title: "Repository"
    url: "https://github.com/sivakar12/small-wins"
  - title: "Hosted on Expo platform"
    url: "exp://exp.host/@sivakar12/small-wins"
hidden: false
---

Instant gratification is what makes you keep building habits. I want to make an app to keep count of doing good things. Seeing progress gives you the happy chemicals. That motivate you to keep doing. I have been using a counter app myself for my own progrss. And I use this app called Forest for counting productive time. I took the data visualizations inspiration from that.

This is my first time doing a React Native project. Expo provided me with the development environment convenience. 

I wanted to keep this minimal. I had only two screens. I didn't use custom routing. I added the menubar myself. I wanted to have punchy colors for this to look inviting. I did the basic styling provided by React Native. I made good use of flex. I broke up the code in a common sense way, not following any templates because this is a small project. 

I am not using a database at the moment. The whole data is stored as a JSON string that is loaded onto memory on start. Because this is always on kilobyte range, I really don't see a need to add the complexity of a database and scheme to the project. Reading is fast on modern smartphones, and memory is also abundant. I have added exporing and importing data feature to backup the data, cloud sync can be added later. 