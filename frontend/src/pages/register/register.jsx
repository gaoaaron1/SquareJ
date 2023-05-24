import React from 'react'
import Axios from 'axios'
import { useState } from "react"

export default function Register() {

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://127.0.0.1:3001/register", {
        username: usernameReg, 
        password: passwordReg,
    }).then((response) => {
        console.log(response);
    });
  };

  return (
    <div>
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
        </div>
    </div>
  )
}
