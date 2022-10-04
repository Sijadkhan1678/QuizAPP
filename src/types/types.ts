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
export type StartQuizProps= {
  startQuiz: StartQuizType
  setStartQuiz: () => void
  submit: ()=> void
  
}
type QuestionProps = {
   quiz: Question
   currentQuestion : number
   selectedAns: string
   setSelectedAns: () => void
}

type ResultProps = {
  score: number
  quiz: string[]
  setQuiz: () => void
  setCurrentQuestion: ()=> void
}