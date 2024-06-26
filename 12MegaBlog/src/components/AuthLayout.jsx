import React, { useEffect,useState ,useSyncExternalStore } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthLayout = ({children,authentication=true}) => {

    const navigate=useNavigate();
    const [loader,setLoader]=useState(true);

    const authStatus=useSelector((state)=>state.auth.status)
   
   
    useEffect(()=>{
        console.log("printing authentication",authentication);
        console.log("printing authstatus",authStatus);
        if(authentication && authStatus!==authentication){
            navigate("/login")
            console.log("im in if")
        }else if(!authentication && authStatus!==authentication){
            navigate("/")
            console.log("im in else if")
    }
    console.log("i am out of condiotion")
    setLoader(false);


},[authStatus,authentication,navigate])
    return loader?<h1>Loading...</h1> :<> {children}</>
};

export default AuthLayout;