 import React, {Dispatch,} from 'react'
 export type Quiz = {
      catagory: string
      difficulty: string
      correct_answer: string
      incorrect_answers: string[]
      question:  string
}
 export type Question = {
      question: string
       answer: string
       options: string[]
}
export type StartQuizType = {
       totalQuiz: null | number
       level: string
}
export type StartQuizProps = {
  startQuiz: StartQuizType
  loading: boolean
  setStartQuiz: () => void
  submit: ()=> void
  
}
type QuestionProps = {
   quiz: Question
   currentQuestion : number
   selectedAns: string
   score: number
   setSelectedAns: () => void
   setCurrentQuestion: 
   setScore: 
}

type ResultProps = {
  score: number
  setScore: () => void
  quiz: string[]
  setQuiz: () => void
  setCurrentQuestion: ()=> void
}