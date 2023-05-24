import React from 'react'
import Axios from 'axios'
import { useState } from "react"
import "./register.css"

export default function Register() {

  //Declare use states
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  //Register function
  const register = () => {
    Axios.post("http://127.0.0.1:3001/register", {
        username: usernameReg, 
        password: passwordReg,
    }).then((response) => {
        console.log(response);
    });
  };

  return (
    <div className="input-container">
        <div className="registration">
            <label>Username</label>
            <input type="text" onChange={(e) => {
                setUsernameReg(e.target.value);
            }} />
            <label>Password</label>
            <input type="text" onChange={(e) => {
                setPasswordReg(e.target.value);
            }}/>
            <button onClick = {register}>
                Register
            </button>
                <p>
                    Already have an Account?<br />
                    <span className="line">
                        <a href="../login/">Log In</a>
                    </span>
                </p>
        </div>
    </div>
  )
}
