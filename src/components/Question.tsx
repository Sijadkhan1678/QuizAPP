import React,{FC} from 'react'
import {QuestionProps} from '../types/types.tsx'

const Question:FC<QuestionProps> = ({quiz,currentQuestion,setCurrentQuestion,selectedAns,setSelectedAns,setScore}) => {
  
  const {question,answer,options} = quiz[currentQuestion]
  
const isSelected = () => {
    if(selectedAns) {setCurrentQuestion(++currentQuestion)}
  }
  
  if(selectedAns === answer){
   setScore(score+2)
  }
  
   return(
       <div className='start-box'>
       <h2>Quizzes {currentQuestion+1} of 20 </h2>
         <h3>
            {question}
         </h3>
        {options.map((option:string,index:number) =>(
        <p
        key={index}
        
        onClick={()=>setSelectedAns(option)}
        className={selectedAns=== option ? 'selected':''}>
        {option}
        </p>))
        }
        
         <button 
         onClick={isSelected}>
         Next
         </button>
       </div>
     )
}
export default Question