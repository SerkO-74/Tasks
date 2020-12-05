import React, {useState} from 'react'
import './App.css';

let Input = (props:any) => {
  const [enteredData, setEnteredData] = useState('')
  const [enterError, setEnterError] = useState(' ') 

  let hendlerInput = (event:any) => {
      

           setEnteredData(event.target.value)
           setEnterError(event.target.value==='' ?`${props.nameOfField} is required`:
                       props.submitError===''? '':`${props.nameOfField} is required`)

  }


  return(
  <>
  <div className='tt'>
    <div className='inputChildren'>&nbsp; {props.nameOfField}</div>
    <div className='rr'>&nbsp; {enterError}</div>
  </div>
    <input className='input' value={enteredData} onInput={hendlerInput}></input>
  </>
  )
}


export default Input