import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'



function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
    <div>Login</div>
    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value) } placeholder="enter username"/>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value) } placeholder="enter PASSWORD"/>
    <button onClick={handleSubmit}>Submit</button>
    </div>
    )
}

export default Login