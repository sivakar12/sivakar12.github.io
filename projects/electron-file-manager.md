---
title: Electron File Manager
emoji: 📁
date: 2018-04-19
metaDescription: This is a sample meta description. If one is not present in your page/project's front matter, the default metadata.desciption will be used instead.
summary: File manager built on Electron and React using modern HTML/CSS/Js tools with multi tabs
tags:
  - HTML/CSS
  - TypeScript
  - React
---

### Background

I wanted to have a file manager with multiple tabs because Windows didn't have one. I wanted to make use of the full suite of tools
modern web development offered. 

When I am doing file transfers, there are always multiple explorer windows open alongside many copy progress dialogs. I wanted to add
tabs and then also make multiple parallel copy paste dialogs. (The copy paste thing is still not implemented)

### Screenshots

![Screenshot 1](/static/img/projects-screenshots/electron-file-manager-1.png)
![Screenshot 2](/static/img/projects-screenshots/electron-file-manager-2.png)
![Screenshot 3](/static/img/projects-screenshots/electron-file-manager-3.png)

### Code Snippets


 
    const NUMBER_OF_COLUMNS = 3

    export default function() {
        const path = useCurrentPath()
        const { selection } = useSelection()

        const columnPaths: Path[] = []
        let middlePath = path
        while(columnPaths.length < NUMBER_OF_COLUMNS) {
            if (middlePath === columnPaths[0]) break
            columnPaths.unshift(middlePath)
            middlePath = pathModule.dirname(middlePath)
        }
        const selectedPaths: (Path| null)[] = _.drop(columnPaths, 1)
        selectedPaths.push(selection)
        
        const [columnContents, setColumnContents] = useState<ContentItem[][]>(columnPaths.map(() => []))

        useEffect(() => {
            Promise.all(columnPaths.map(p => getFolderContents(p)))
                .then(contents => setColumnContents(contents))
        }, [path])

        return (
            <ColumnView>
                {columnPaths.map((path, index) =>
                    <ColumnContainer
                        key={path}
                        path={path}
                        contents={columnContents[index]}
                        selectedItem={selectedPaths[index]}
                    />
                )}
            </ColumnView>
        )
    }

<br/>

    export function getFolderTree(path: Path, maxItems: number = -1): Observable<Path> {
        let itemsLooked = 0
        return Observable.create(async (observer: Observer<Path>) => {
            async function recurse(folder: Path) {
                const items = await fsPromise.readdir(folder)
                for (let i = 0; i < items.length; i++) {
                    const childPath = pathModule.resolve(folder, items[i])
                    observer.next(childPath)
                    itemsLooked += 1
                    if (itemsLooked === maxItems) {
                        observer.error({ message: 'Too many items'})
                        observer.complete()
                    }
                    const isFolder = (await fsPromise.stat(childPath)).isDirectory()
                    if (isFolder) {
                        await recurse(childPath)
                    }
                }
            }
            await recurse(path)
            observer.complete()
        })
    }

    export function getFolderSize(path: Path): Observable<number> {
        return getFolderTree(path, 10000)
                .pipe(concatMap(getFileDetails))
                .pipe(map(stats => stats.size))
                .pipe(scan((total, current) => total + current))
                .pipe(throttleTime(300))
    }

<br/>

    type Props = {
        content: ContentItem,
        onClick?: (event: any) => void,
        onDoubleClick?: (item: any) => void,
        isSelected?: boolean
    }
    export default function(props: Props) {
        let icon = props.content.isDirectory ? '📁': '📃'
        if (props.content.errorAccessing) {
            icon = '❌'
        }
        return (
            <div className={`column-view-item ${props.isSelected ? 'selected' : ''}`} 
                onClick={props.onClick}
                onDoubleClick={props.onDoubleClick}>
                <div className="column-view-item-name">
                    { icon }
                    {props.content.name}
                    {props.content.isSymLink ? '🔗' : '' }
                </div>
            </div>
        )
    }

### Future
