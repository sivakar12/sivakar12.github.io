---
title: Phrasal Verbs React SPA
emoji: 📖
date: 2021-09-03
metaDescription: This is a sample meta description. If one is not present in your page/project's front matter, the default metadata.desciption will be used instead.
summary: Single Page Web Application to practice phrasal verbs, question-answer way
tags:
  - React
  - NLP
---

### Background

Spaced repition is a really effective technique. I used an app called Memrise to learn a lot of vocabulary. I wanted to do something 
like that. I wanted to add a little bit of intelligence. 

I had a question answer dataset. The dataset had only one question and one answer. I used NLP to figure out the answers that could be close to the correct answer. So the options provided are quite similar. This is done by finding the similaries in a Jupyter Notebook

### Screenshots


![Screenshot 1](/static/img/projects-screenshots/phrasal-verbs-1.png)
![Screenshot 2](/static/img/projects-screenshots/phrasal-verbs-2.png)
![Screenshot 3](/static/img/projects-screenshots/phrasal-verbs-3.png)

### Code Snippets

    function App() {
      const [{ question, answers, correctAnswer, meaning }, setQuestion] = 
        useState(getNextQuestionAndAnswers(data, null))

      const [correctCount, setCorrectCount] = useState(0)
      const [doneCount, setDoneCount] = useState(0)
      const [answerClicked, setAnswerClicked] = useState(null)

      const handleOnComplete = (answerClicked) => {
        setAnswerClicked(answerClicked)
        if (correctAnswer) {
          setCorrectCount(correctCount + 1)
        }
        setDoneCount(doneCount + 1)
        
      }
      
      useEffect(() => {
        if (doneCount === 0) { return }
        let waitTime = correctAnswer === answerClicked ? 1000 : 4000;
        setTimeout(() => {
          setAnswerClicked(null)
          setQuestion(getNextQuestionAndAnswers(data, null))
        }, waitTime)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [doneCount])

      return (
        <Prompt
          question={question}
          options={answers}
          meaning={meaning}
          correctAnswer={correctAnswer}
          answerClicked={answerClicked}
          onComplete={handleOnComplete}
        />
      );
    }

<br/>

    docs = {}
    ids = [int(i) for i in df.index.tolist()]
    for id in ids:
        docs[id] = nlp(df['verb'][id])
    for i in ids:
        for j in ids:
            similarities[i][j] = docs[i].similarity(docs[j])
### Future
This can have more intelligence. It should keep track of the mistakes
