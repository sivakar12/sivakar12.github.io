---
title: Wordle Clone
emoji: 📋
date: 2022-01-17
metaDescription: This is a sample meta description. If one is not present in your page/project's front matter, the default metadata.desciption will be used instead.
summary: Made a clone on viral Wordle game in 5 hours
tags:
  - React
  - TypeScript
  - CSS
---

### Background

I wanted to see how quickly I can make a clone of the Wordle game that went viral. Used React and vanilla CSS and coded it in under five hours.

### Links

- [Respository](https://github.com/sivakar12/wordle-clone)
- [Live App](https://wordle-sivakar12.netlify.app/)

### Screenshots

![Screenshot 1](/static/img/projects-screenshots/wordle-1.png)
![Screenshot 2](/static/img/projects-screenshots/wordle-2.png)
![Screenshot 3](/static/img/projects-screenshots/wordle-3.png)


### Code Samples

```
function App() {
  
  const [word, setWord] = React.useState(getRandomWord());
  const [currentEntry, setCurrentEntry] = React.useState('');
  const [attempts, setAttempts] = React.useState<Attempts>([]);
  const [gameOver, setGameOver] = React.useState(false);

  function colorForLetter(letter: string, index: number) {
    if (word[index] === letter) {
      return 'green';
    } else if (word.indexOf(letter) > -1) {
        return 'yellow';
    } else {
      return ''
    }
  }

  function getColorsForKeyboard(): { [key: string]: string } {
    let colorForLetter: { [key: string]: string}  = {};
    attempts.forEach(attempt => {
      attempt.split('').forEach((letter, index) => {
        if (word.charAt(index) === letter) {
          colorForLetter[letter] = 'green';
        } else if (word.indexOf(letter) > -1) {
          colorForLetter[letter] = 'yellow';
        } else {
          colorForLetter[letter] = 'grey';
        }
      })
    })
    return colorForLetter;
  }

  const handleLetterInput = (letter: string) => {
    if (currentEntry.length === WORD_LENGTH) {
      return;
    }
    setCurrentEntry(currentEntry + letter);
  }

  const handleBackspace = () => {
    if (currentEntry.length === 0) {
      return;
    }
    setCurrentEntry(currentEntry.slice(0, -1));
  }
  const handleSubmitWord = () => {
    if (currentEntry.length !== WORD_LENGTH) {
      return;
    }
    if (validWord(currentEntry)) {
      setAttempts([...attempts, currentEntry]);
      setCurrentEntry('')
      if (currentEntry === word || attempts.length === MAX_ATTEMPTS - 1) {
        setGameOver(true);
      }
    } else {
      setCurrentEntry('');
    }
  }

  const GameOver = () => {
    const isWon = attempts[attempts.length - 1] === word;
    const handleRestart = () => {
      setWord(getRandomWord());
      setAttempts([]);
      setGameOver(false);
    }
    return (
      <div className="game-over">
        {isWon ? <p>You won!</p> : <p>Game over!</p>}
        {!isWon && <p>The word is {word}</p>}
        <span className="game-over-restart" onClick={handleRestart}>Play Again</span>
      </div>
    )
  }

  return (
    <div className='main-layout'>
      <div className='title'>WORDLE</div>
      <hr/>
      <div className='letter-grid'>
        {attempts.map(word => <AttemptedRow word={word} colorForLetter={colorForLetter} />)}
        { (attempts.length < MAX_ATTEMPTS) && <CurrentEntry word={currentEntry}/> }
        { _.range(0, MAX_ATTEMPTS - attempts.length - 1, 1).map(() => <EmptyRow />)}
      </div>
      <hr/>
      { gameOver ?
        <GameOver/> :
        <Keyboard
          onLetterInput={handleLetterInput}
          onBackspace={handleBackspace}
          onEnter={handleSubmitWord}
          colorForKey={getColorsForKeyboard()}
        />
      }
    </div>
  );
}

```