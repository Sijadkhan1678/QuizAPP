import React,{FC} from 'react';
import loading from './loading.gif';

const Loading:FC = () => {
   return (
       <div className='card' >
       <img src={loading} alt="loading" style={{width:'300px'}} />
       
      </div>
     )
}
export default Loading