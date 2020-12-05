import React, {useState} from 'react';
import './App.css';
import Input from './Input';

let blockMenu = ['EMAIL', 'PASSWORD']

function App() {
  const [submitError, setSubmitError] = useState('')

  let handlerSubmit = (event: any) => {
    event.preventDefault()

    // let e = blockMenu.map((e, i)=>({ [e]: event.target[i].value   }))
    let w = blockMenu.map((e, i)=> event.target[i].value)
    setSubmitError( blockMenu.length === w.length ?``:`Invalid email or password`)
  console.dir(w)
}

  return (
<div className='page'>
  <form className='leftSection' onSubmit={handlerSubmit}>
    <div> 
        {blockMenu.map(e =><Input 
                            nameOfField={e}
                            submitError={submitError}
                          />
        )}
    </div>
    <div>
        <div>{submitError}</div>
      <div><button className='btn'>Submit</button></div>
    </div>
  </form>
</div>
  )
}

export default App;
