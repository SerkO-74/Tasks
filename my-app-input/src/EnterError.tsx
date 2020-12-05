import React, {useState} from 'react';
import './App.css';

let EnterError = (props:any) => {
  const [enterError, setEnterError] = useState(' ')


  // setEnterError(props.submitError===''?`${props.rr} is required`:'') 

 return(
   <h5>{enterError}</h5>
 ) 
}
export default EnterError;