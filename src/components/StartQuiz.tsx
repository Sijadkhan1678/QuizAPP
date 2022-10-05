import React,{FC,ChangeEvent} from 'react'
import {StartQuizProps} from '../types/types'
import Loading from './Loading.tsx'

const StartQuiz:FC<StartQuizProps> = ({loading,startQuiz,setStartQuiz,submit}) => {
  // function pass user selected level to api 
  const setLevel = (level:string): void =>{ 
    setStartQuiz({...startQuiz,level})
  }
  // function user selected total number of quiz pass to api
  const selectQuantity = (e:ChangeEvent<HTMLSelectElement>):void => {
  setStartQuiz({...startQuiz,totalQuiz: e.target.value})
   
  }
  
  const level = startQuiz.level
  
    return (
      !loading ? 
       <div className='card'>
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
       </div>:
       <Loading />
      )
}
export default StartQuiz