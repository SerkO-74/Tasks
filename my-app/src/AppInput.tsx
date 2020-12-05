import React, {useState} from 'react';
import './App.css';

let FieldOne = () => {
  const [inputField, setInputField] = useState('Ви не ввели жодного символу')
  let handleInput = (event:any) => {
  setInputField(`Ви ввели: ${event.target.value.length} символів`)   
  }
  return(
    <>
       <input type="text" onInput={handleInput}/>
       {inputField}
    </>
  )
}

let FieldFormTwo = () => {
  return(
     <form>
       <input type="text" />
       <input type="reset" value="Видалити" />
     </form>
  )
}

let FieldHookTwo = () => {
  const [inputField, setInputField] = useState('')

  let handleInput = (event:any) => {
    setInputField(event.target.value)
  }

  let handleClick = (event:any) => {
    setInputField('')
  }

  return(
    <>
       <input type="text" onInput={handleInput} value={inputField}/>
       <button onClick={handleClick}>Видалити</button>
   </>
  )
}

let FieldThree = () => {
    const [inputField, setInputField] = useState('')

    let handleInput = (event:any) => {
    setInputField(event.target.value.length < 100 ? event.target.value: event.target.value.slice(0,100))
    }
    return(
      <>
         <input type="text" onInput={handleInput} value={inputField} />
     </>
    )
}

let FieldFour = () => {
  const [inputField, setInputField] = useState('')

let handleInput = (event:any) => {
   
  let valueNumder= +event.target.value[event.target.value.length-1]
  let valueString = event.target.value[event.target.value.length-1]
  setInputField(
    String(((valueNumder>0 && valueNumder<10) ? `${inputField}${valueNumder}` :
           ((valueString)=== '+' || (valueString)=== '-') ? `${inputField}${valueString}` :
           ((valueString)=== ' ') ?`${inputField}${valueString}` : inputField)
           )
  )
 }
  return(
    <>
       <input type="text" onInput={handleInput} value={inputField} />
   </>
  )
}


const App = () => {
  return (
    <div className='flex'>
      <h6>1</h6>
        <FieldOne/>
      <h6>2</h6>
        <FieldFormTwo/>
        <FieldHookTwo/>
      <h6>3 (обмеження 100 символів)</h6>
        <FieldThree/>
      <h6>4 (обмеження: лише цілі числа + та -)</h6>
        <FieldFour/>
    </div>
  )};

export default App