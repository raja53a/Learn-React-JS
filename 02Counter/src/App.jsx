import './App.css'
import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if(counter < 10){
      setCounter(counter + 1)
    }
    console.log(counter)
  }

  const removeValue = () => {
    if(counter >= 1){
      setCounter(counter - 1)
    }
    console.log(counter)
  }

  return (
    <>
    <h1>Learning React-Js</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add + </button><p></p>
    <button onClick={removeValue}>Remove - </button>

    <h2>Current Value is : {counter}</h2>
    <span>Minimum Value: 0 and Max Value: 10</span>
    </>
  )
}

export default App
