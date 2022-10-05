import React, {
  FC,
  useState
} from 'react'
import {
  QuestionProps
} from '../types/types.tsx'

const Question: FC < QuestionProps > = ({ quiz, currentQuestion, setCurrentQuestion, selectedAns, setSelectedAns, score, setScore
}) => {
  
  const [selectedOpt,
    setSelectedopt] = useState(null)
  const { question , answer, options } = quiz[currentQuestion]
  
  const  selectOption = (option:string | number):void => {

    setSelectedAns(option)
    setSelectedopt(option)

  }

  const next = ():void => {
    if (selectedOpt === selectedAns) {
      setCurrentQuestion(++currentQuestion)}

    if (selectedAns === answer) {

      setScore(2+score)
    }
  }

  return(
    <div className='card'>
       <h2>Quizzes {currentQuestion+1} of {quiz.length} </h2>
         <h3>
            {question}
         </h3>
        {options.map((option: string, index: number) =>(
      <p
        key={index}
        onClick={()=>selectOption(option)}
        className={selectedAns === option ? 'selected': ''}>
        {option}
      </p>
    ))
      }
         <button
        onClick={()=>next()}>
         Next
         </button>
    </div>
  )
}
export default Question