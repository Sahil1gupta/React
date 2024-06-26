import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // console.log(count)

  const counterUpdatation=(event)=>{
        if(event.target.textContent.toLowerCase()=='increase count'){
          console.log("first")
          if(counter>=0 && counter<20){
            setCounter(counter+1)
          }
          
        }

        if(event.target.textContent.toLowerCase()=='decrease count'){
          console.log("second")
          if(counter>0 ){
            setCounter(counter-1)
          }
        }
  }
  console.log(counter)
  return (
    <>
     <h1>hello react journey</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={counterUpdatation}>Increase count</button>
     <button onClick={counterUpdatation}>decrease count</button>
    </>
  )
}

export default App
