import React from 'react'
import Axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css"

export default function Login() {

    //Declare use states
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    //Login function
    const login = () => {
        Axios.post("http://127.0.0.1:3001/login", {
            username: username, 
            password: password,
        }).then((response) => {
            //After click login button

            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
                navigate("/shop");
            }

            console.log(response.data);
        });
      };

    return (
        <div className="input-container">
            <div className="registration">
                <label>Username</label>
                <input type="text" onChange={(e) => {
                    setUsername(e.target.value);
                }} />
                <label>Password</label>
                <input type="text" onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <button onClick = {login}>
                    Login
                </button>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        <a href="../register/">Sign Up</a>
                    </span>
                </p>
            </div>
            <h1> {loginStatus} </h1>
        </div>
      )
}
