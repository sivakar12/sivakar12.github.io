---
title: React Native Habit Builder
emoji: ✅
date: 2021-11-03
metaDescription: This is a sample meta description. If one is not present in your page/project's front matter, the default metadata.desciption will be used instead.
summary: A small but whole application
tags:
  - TypeScript
  - React Native
---

### Background

Instant gratification is what makes you keep building habits. I want to make an app to keep count of doing good things. Seeing progress gives you the happy chemicals. That motivate you to keep doing. I have been using a counter app myself for my own progrss. And I use this app called Forest for counting productive time. I took the data visualizations inspiration from that.

This is my first time doing a React Native project. Expo provided me with the development environment convenience. 

I wanted to keep this minimal. I had only two screens. I didn't use custom routing. I added the menubar myself. I wanted to have punchy colors for this to look inviting. I did the basic styling provided by React Native. I made good use of flex. I broke up the code in a common sense way, not following any templates because this is a small project. 

I am not using a database at the moment. The whole data is stored as a JSON string that is loaded onto memory on start. Because this is always on kilobyte range, I really don't see a need to add the complexity of a database and scheme to the project. Reading is fast on modern smartphones, and memory is also abundant. I have added exporing and importing data feature to backup the data, cloud sync can be added later.

### Links

- [GitHub repository](https://github.com/sivakar12/habit-builder-react-native)
- [Hosted on Expo platform]("exp://exp.host/@sivakar12/habit-builder")


### Screenshots
![Screenshot 1](/static/img/projects-screenshots/habit-builder-1.png)
![Screenshot 2](/static/img/projects-screenshots/habit-builder-2.png)
![Screenshot 3](/static/img/projects-screenshots/habit-builder-3.png)


### Code Snippets
```
<AppContext.Provider value={contextData}>
    <SafeAreaView style={styles.safeArea}>
    <HeaderBar 
        title="Habit Builder"
        showBack={selectedHabit !== null}
        handleBack={() => setSelectedHabit(null)}
        handleMenu={() => setShowMenu(showMenu => !showMenu)}
        />
    { 
        (selectedHabit) ? 
        <HabitDetailView habitId={selectedHabit}/> : 
        <HabitListView onHabitSelect={setSelectedHabit} showArchives={showArchives}/> 
    }
    <Menu
        open={showMenu} 
        items={selectedHabit ? habitDetailMenuItems : mainMenuItems} 
        onClose={() => { setShowMenu(false) }}
    />
    {DialogBoxToShow}
    </SafeAreaView>
</AppContext.Provider>
```
```
type Id = string;
type DateString = string;

type Habit = {
    id: Id,
    name: string,
    createdTime: DateString,
    archived: boolean,
    logs: HabitLog[]
}

type HabitLog = {
    time: DateString
}

type Orders = Id[]
```
```
const makeInitialContextData = () => {
    const [habits, setHabits] = useState<Habit[]>([])
    
    useEffect(() => {
        AsyncStorage.getItem('habitdatalogs').then(dataString => {
            if (dataString) {
                const dataParsed = JSON.parse(dataString) as Habit[]
                setHabits(dataParsed)
            }
        })
    }, [])
    useEffect(() => {
        AsyncStorage.setItem('habitdatalogs', JSON.stringify(habits))
            .catch(() => { alert('failure to save')})
    }, [habits])

    const incrementHabit = (habitId: Id) => {
        const newHabits = habits.map(habit => {
            if (habit.id === habitId) {
                const log: HabitLog = {
                    time: dayjs().toISOString()
                }
                return {...habit, logs: [...habit.logs, log]}
            } else {
                return habit
            }
        })
        setHabits(newHabits)
    }

    const getHabitById = (habitId: Id) => {
        return habits.filter(h => h.id === habitId)[0]
    }

    const addHabit = (habitName: string) => {
        const habit: Habit = {
            id: habits.length.toString(),
            name: habitName,
            createdTime: dayjs().toISOString(),
            archived: false,
            logs: []
        }
        setHabits([...habits, habit])
    }

    const deleteHabit = (habitId: Id) => {
        const newHabits = habits.filter(h => h.id !== habitId);
        setHabits(newHabits)
    }

    const toggleArchiveForHabit = (habitId: Id) => {
        const newHabits = habits.map(habit => {
            if (habit.id === habitId) {
                return {...habit, archived: !habit.archived}
            } else {
                return habit
            }
        })
        setHabits(newHabits);
    }


    const loadSampleData = () => {
        setHabits(sampleData)
    }

    return {
        loadSampleData,
        habits,
        incrementHabit,
        getHabitById,
        addHabit,
        setHabits,
        deleteHabit,
        toggleArchiveForHabit
    }
}
```


### Future

- Allow syncing the data to a cloud storage
- Use more gestures for UX
- Even more data visualization