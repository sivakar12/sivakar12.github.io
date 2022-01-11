---
title: React Native Habit Builder
emoji: ✅
date: 2019-01-01T00:00:00.000Z
metaDescription: This is a sample meta description. If one is not present in your page/project's front matter, the default metadata.desciption will be used instead.
summary: A small but whole application
tags:
  - TypeScript
  - React Native
---

### Background

Instant gratification is what makes you keep building habits. I want to make an app to keep count of doing good things. 
Seeing progress gives you the happy chemicals. That motivate you to keep doing. 

### Screenshots

![Screenshot 1](/static/img/projects-screenshots/habit-builder-1.png)
![Screenshot 2](/static/img/projects-screenshots/habit-builder-2.png)
![Screenshot 3](/static/img/projects-screenshots/habit-builder-3.png)


### Code Snippets

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
        <NewHabitDialog
          onSubmit={(habitName) => {contextData.addHabit(habitName); setShowNewHabitDialog(false)}}
          onDismiss={() => { setShowNewHabitDialog(false) }}
          visible={showNewHabitDialog}
        />
      </SafeAreaView>
    </AppContext.Provider>

<br/>

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

<br/>

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

### Future
