import React, {
  useEffect,
  useState
} from 'react';
import './App.css'
import {
  QuestionType,
  StartQuizType
} from './types/types.ts'
import getQuizzes from './api/getQuizzes.ts'
import StartQuiz from './components/StartQuiz.tsx'
import Question from './components/Question.tsx'
import Result from './components/Result.tsx'

const App: React.FC = () => {
  const [startQuiz,
    setStartQuiz] = useState < StartQuizType > ({
      totalQuiz: null,
      level: ''
    })

  const [quiz,
    setQuiz] = useState < QuestionType[] > ([])

  const [currentQuestion,
    setCurrentQuestion] = useState < number > (0)

  const [selectedAns,
    setSelectedAns] = useState < string > (null)
  const [score,
    setScore] = useState < number > (0)

  const {
    totalQuiz,
    level
  } = startQuiz
  console.log('quiz and level', level, totalQuiz)
  console.log('slected ans', selectedAns)
  /*useEffect(()=> {
    const quizzes = getQuizzes(12, 'easy')
   // console.log(quizzes[0])
  }, [])*/
  //const {answer} = quiz[selectedAns]
  //if (//quiz[currentQuestion].
 /*if( answer === selectedAns) {
    setScore(score+2)
  }*/
  const onSubmit = async () => {
    console.log('submit')
    if (!totalQuiz || level === '') {
      alert('please select level and no of questions')

    } else {
    const quizzes:QuestionType[] = await getQuizzes(totalQuiz, level)
    console.log('api quizzes',quizzes)
    setQuiz(quizzes)
    }

  }
  
   if(currentQuestion === quiz.length-1){
    return(<div className='container'>
     <h2> QUIZY APP </h2>
      <Result score={score}
              quiz={quiz}
              setQuiz={setQuiz}
              setCurrentQuestion={setCurrentQuestion}/>
    </div>
    )
  }
  console.log('quiz length',quiz.length)
  if (!quiz.length) {
    return(
      <div className='container'>
        <h2> QUIZY APP </h2>
        <StartQuiz startQuiz={startQuiz}
        setStartQuiz={setStartQuiz}
        submit={onSubmit} />
      </div>
    )
  }
  if (quiz.length) {
    return (
      <div className='container'>
      <h2> QUIZY APP </h2>
        <Question quiz={quiz}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        selectedAns={selectedAns}
        setSelectedAns={setSelectedAns} />
      </div>

    )
  }
}

export default App