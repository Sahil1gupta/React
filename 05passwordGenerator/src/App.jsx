import { useCallback, useState ,useEffect, useRef} from 'react'
import ExampleComponent from './ExampleComponent';


function App() {
  const [length, setLength] = useState(10)
  const[numAllowed,setNumAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("");
  const [copy,setCopy]=useState("copy")
  const genreatePassword=useCallback(()=>{
    console.log("calculate kr jb length,numAllowed,charAllowed,setPassword ye chnage ho aur ye change hoga jb ispe click krege")
    let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numAllowed) str+="0123456789"
      if(charAllowed) str+="!@#$%&*"

      for(let i=0;i<=length;i++){
        let char=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char)
      }

      setPassword(pass);
  },[length,numAllowed,charAllowed,setPassword])
  


  // to run above code we will use useEffect
  useEffect(()=>{
    console.log("run kr generatepassword ko jb jb length,numAllowed,charAllowed ye sare change hoye")
    genreatePassword()
    setCopy("copy")
  },[length,numAllowed,charAllowed])

  const refPassword=useRef(null)
 
 const copyToClipBoard=useCallback(()=>{
        refPassword.current?.select();
        console.log("refPassword",refPassword)
       console.log("refPassword.current",refPassword.current)
       console.log("refPasswordvalue",refPassword.current.value)
        // refPassword.current?.setSelectionRange(1,99);
        window.navigator.clipboard.writeText(password)  // window.navigator.clipboard.writeText this line returns promise so if we want thenwe can handle it using .then and catch
        setCopy("copied")
  },[password])
  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white mb-4 text-lg text-center">password generator</h1>
        <div className="className flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={refPassword}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"  onClick={copyToClipBoard}>{copy}</button>
        </div>
        <div className="flex text-sm mb-4 gap-x-2">{/*parent div */}

          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onInput={(e)=>{setLength(e.target.value)}}//onchange can also work
            />
            <label>Length: {length}</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={()=>{
                setNumAllowed((prev)=>!prev);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={()=>{
                setNumAllowed((prev)=>!prev);
              }}
              />
              <label htmlFor="characterInput">Characters</label>             
          </div>

        </div>
      </div>
     
    </>
  )
}

export default App
