import React, { FC , useState } from 'react';
import './App.css'
import {
  QuestionType,
  StartQuizType
} from './types/types.ts'
import getQuizzes from './api/getQuizzes.ts'
import StartQuiz from './components/StartQuiz.tsx'
import Question from './components/Question.tsx'
import Result from './components/Result.tsx'

const App:FC = () => {
  const [startQuiz,
    setStartQuiz] = useState < StartQuizType > ({
      totalQuiz: null,
      level: ''
    })
  const [loading,
    setLoading] = useState < boolean > (false)
  const [quiz,
    setQuiz] = useState < QuestionType[] > ([])

  const [currentQuestion,
    setCurrentQuestion] = useState < number > (0)

  const [selectedAns,
    setSelectedAns] = useState < string > (null)
  const [score,
    setScore] = useState < number > (0)

  const { totalQuiz, level} = startQuiz

  const onSubmit = async () => {
    
    if (!totalQuiz || level === '') {
        alert('please select level and no of questions')

    } else {
      setLoading(true)
      const quizzes: QuestionType[] = await getQuizzes(totalQuiz, level)

      setQuiz(quizzes)
      setLoading(false)
    }

  }

  if (currentQuestion >= 5 && currentQuestion === quiz.length) {
    return(<div className='container'>
     <h2> QUIZY APP </h2>
      <Result score={score}
      quiz={quiz}
      setScore={setScore}
      setQuiz={setQuiz}
      setCurrentQuestion={setCurrentQuestion} />
    </div>
    )
  }
  
  if (!quiz.length) {
    return(
      <div className='container'>
        <h2> QUIZY APP </h2>
        <StartQuiz loading={loading} startQuiz={startQuiz}
        setStartQuiz={setStartQuiz}
        submit={onSubmit} />
      </div>
    )
  }
  if (quiz.length) {
    return (
      <div className='container'>
      <h2> QUIZY APP </h2>
        <Question loading={loading}
        quiz={quiz}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        selectedAns={selectedAns}
        setSelectedAns={setSelectedAns}
        score={score}
        setScore={setScore} />
      </div>

    )
  }
}

export default App