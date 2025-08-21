---
title: "Eye Refresh"
emoji: "👁"
date: "2022-01-28"
shortDescription: "Android app that sends reminders for 20-20-20 rule for reducing eye strain"
screenshotUrls:
  - 'projects-screenshots/eye-refresh-1.png'
  - 'projects-screenshots/eye-refresh-2.png'
  - 'projects-screenshots/eye-refresh-3.png'
  - 'projects-screenshots/eye-refresh-4.png'
links:
  - title: "Repository"
    url: "https://github.com/sivakar12/EyeRefresh"
hidden: false
---

20-20-20 rule is a solution to reducing eye strain when one looks at screens for long. Every twenty minutes, you look at someting twenty feet away for twenty seconds.

I made an Android app that sends reminders every twenty minutes. The reminders can be paused, snoozed, and acted upon. There is a timer for the twenty-second-refersh as well.

I made use of state diagram to get the design done. I am using a database (Room on top of SQLite) to store the state transitions). That is the source of truth for state. Actions can be taken from the Activity or the Notification buttons. There is a Broadcast receiver listening for notification actions. Alarm manager is used to schedule notifications which also uses this broadcast receiver.

I used Google's brand new Material You to get the UI styles.

I learned Android four or five years ago. I have forgotten a lot and a lot has changed since then. I got to brush up on my Android knowledge doing this. 