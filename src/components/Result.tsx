import React,{ FC } from 'react';
import {ResultProps} from '../types/types.tsx'

const Result:FC<ResultProps> = ({score,quiz,setQuiz,setCurrentQuestion}) => {
  const restart = () => {
    setCurrentQuestion(0)
    setQuiz([])
  }
    
  const correctAns = score/2;
  const incorrectAns = quiz.length - correctAns
   return (
       <div className='start-box' >
       <h1>Score : {score} </h1>
        <h2>  Total Quiz : {quiz.length} </h2>
        <h2>  Correct Answer : {correctAns} </h2>
        <h2>incorrect Answer: {incorrectAns} </h2>
       
       <button onClick={restart}> Restart </button>
       </div>
     )
}
export default Result;
