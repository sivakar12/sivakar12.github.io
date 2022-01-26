---
title: File Change Count VS Code Extension
emoji: 🔟
date: 2021-10-16
metaDescription: This is a sample meta description. If one is not present in your page/project's front matter, the default metadata.desciption will be used instead.
summary: An extension that shows how many times a file has changed in its Git history, to figure out the important files in a project
tags:
  - VS Code API
  - JavaScript
---

### Background

When looking at a new code repository, you may want to know what are the important files of the project. One heuristic to know what the important files are is by looking at how many modifications that particular file has been through. 

I have made a Visual Studio Code extension that looks at the Git history and count how many times each file has gone through a change. I propagate this up the file tree as well. There is another file tree panel next to the standard one that shows this tree.


### Screenshots
![Screenshot 1](/static/img/projects-screenshots/file-change-count-extension-1.jpg)


### Links
- [GitHub repository](https://github.com/sivakar12/file-change-count-vscode-extension)
- [Extension in Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=sivakar12.file-change-count)

### Code Snippets
```
function getDirectChildrenForPath(parentPath: string, allPaths: string[]): ChildrenList[] {
  return allPaths
    .filter(path =>
      path !== '.' && pathModule.dirname(path) === parentPath
    )
    .map(childPath => {
      const hasChildren = allPaths.filter(path =>
        pathModule.dirname(path) === childPath
      ).length > 0;
      return {
        path: childPath,
        hasChildren
      };
    });
}
```
```
async function getFileChangeCounts(repoAbsolutePath: string): Promise<CountsForPaths> {
  const commits = await gitToJs(repoAbsolutePath);
  
  const counts: CountsForPaths = commits.reduceRight((counts: CountsForPaths, commit) => {

    commit.filesRenamed.forEach(renameAction => {
      counts.renamePath(renameAction.oldPath, renameAction.newPath);
    });

    commit.filesAdded.concat(commit.filesModified).forEach(fileModification => {
      const filePath = fileModification.path;
      counts.increment(filePath);
    });
    return counts;
  }, new CountsForPaths());
  counts.populateParents();
  console.log(counts);
  return counts;
}
```

