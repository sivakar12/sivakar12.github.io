---
title: File Change Count VS Code Extension
emoji: 🔟
date: 2019-01-01T00:00:00.000Z
metaDescription: This is a sample meta description. If one is not present in your page/project's front matter, the default metadata.desciption will be used instead.
summary: An extension that shows how many times a file has changed in its Git history, to figure out the important files in a project
tags:
  - VS Code API
  - JavaScript
---

### Background


### Screenshots
![Screenshot 1](/static/img/projects-screenshots/file-change-count-extension-1.jpg)

### Code Snippets

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

<br/>

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
