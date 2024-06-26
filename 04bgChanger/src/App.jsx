import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')

  // function changeColor(colorName){
  //   setColor(colorName);
  // }
  // onClick={changeColor("red")}
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:color}} >
        <div className="fixed flex flex-wrap bottom-12 justify-center px-3 inset-x-0 gap-2">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          </div>
          <div className="px-4 py-1 bg-black text-white rounded-full flex justify-center align-middle" onClick={()=>setColor("pink")}>Reset</div>
        </div>
    </div>
    </>
  )
}

export default App
