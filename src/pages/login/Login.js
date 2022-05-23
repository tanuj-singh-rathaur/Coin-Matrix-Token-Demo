import React, { useState } from 'react'
import auth from '../../auth'
import './Login.css'
const Login=(props)=> {
  
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const usernameChangedHandler=(event)=>{
           return setUsername(event.target.value)
    }

    const passwordChangedHandler=(event)=>{
        return setPassword(event.target.value)
    }

  const loginHandler=()=>{
    auth.login(() => {
      props.history.push("/");
    });
       console.log(username,password,"login done")
  }
        
        return (
            <div className="login_panel">
             
             <div className="login_form">
            
             <div className="username">
            <label >Username</label>
            <div className="userfield">
            <input type="text" value={username} onChange={(event)=>usernameChangedHandler(event)} autoFocus></input>
            <div className="line"></div>
            </div>
          </div>

          <div className="password">
            <label >Password</label>
            <div className="userfield">
            <input type="text" value={password} onChange={(event)=>{passwordChangedHandler(event)}} autoFocus></input>
            <div className="line"></div>
            </div>
          </div>

            <div className="submit">
                <button  onClick={loginHandler}>Submit</button>
            </div>
                </div>
            </div>
        )
    
}


export default Login