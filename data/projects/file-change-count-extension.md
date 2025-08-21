---
title: "File Change Count VS Code Extension"
emoji: "🔟"
date: "2021-10-16"
shortDescription: "An extension that shows how many times a file has changed in its Git history, to figure out the important files in a project"
screenshotUrls:
  - 'projects-screenshots/file-change-count-extension-1.jpg'
links:
  - title: "Repository"
    url: "https://github.com/sivakar12/file-change-count-vscode-extension"
  - title: "Extension in Visual Studio Marketplace"
    url: "https://marketplace.visualstudio.com/items?itemName=sivakar12.file-change-count"
hidden: false
---

When looking at a new code repository, you may want to know what are the important files of the project. One heuristic to know what the important files are is by looking at how many modifications that particular file has been through. 

I have made a Visual Studio Code extension that looks at the Git history and count how many times each file has gone through a change. I propagate this up the file tree as well. There is another file tree panel next to the standard one that shows this tree. 