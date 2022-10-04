import  {Quiz,Question} from '../types/types';
const getQuizzes = async (totalQuestions:number,level:string): promise<Question[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    const {results}= await res.json();
    console.log(results)
    const quizzes:Question[] = results.map( (quiz:Quiz) =>{ 
      return {
        question: quiz.question,
        answer : quiz.correct_answer,
        options: quiz.incorrect_answers.concat(quiz.correct_answer)
    }
      
    })
    
    return quizzes
  
}
export default getQuizzes