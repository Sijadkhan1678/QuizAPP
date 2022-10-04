import React,{FC,FormEvent} from 'react'
import {StartQuizProps} from '../types/types'

const StartQuiz:FC<StartQuizProps> = ({startQuiz,setStartQuiz,submit}) => {
  const setLevel = (level:string): void =>{ 
    setStartQuiz({...startQuiz,level})
  }
  const selectQuantity = (e:FormEvent<HTMLSelectElement>):void => {
  setStartQuiz({...startQuiz,totalQuiz: e.target.value})
   
  }
  console.log('straquiz',startQuiz)
  const level = startQuiz.level
    return(
       <div className='start-box'>
        <h2> Start Quiz </h2>
        <select onChange={selectQuantity}>
        <option value=''> Select Quiz Number</option>
        <option value={5}>5 </option>
        <option value={10}>10 </option>
        <option value={15}>15 </option>
        <option value={20}>20 </option>
        
        </select>
        
        <h2> Select Level </h2>
        <p onClick={()=>setLevel('easy')} className={level === 'easy' ? 'selected':''}>easy </p>
        <p onClick={()=>setLevel('medium')} className={level === 'medium' ? 'selected':''}> medium </p>
        <p onClick={()=>setLevel('hard')} className={level === 'hard' ? 'selected':''}>hard </p>
        
        <button onClick={()=>submit()}> Start Quiz </button>
       </div>
      )
}
export default StartQuiz