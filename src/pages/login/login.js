import React from 'react'
import { useRef, useState, useEffect, useContext } from "react";
import "./login.css";
import AuthContext from '../../context/auth-provider';

export default function Login() {
    
    //Auth context goes here
    const { setAuth } = useContext(AuthContext);

    const userRef = useRef();
    const errorRef = useRef();

    const[user, setUser] = useState("");
    const[password, setPassword] = useState("");
    const[errorMsg, setErrorMsg] = useState("");
    const[success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMsg("");
    }, [user, password])

    {/* Function to handles the submit button */}
    const handleSubmit = async (e) => {
        //prevent from reloading page
        e.preventDefault();

        console.log(user, password);

        setUser("");
        setPassword("");

        setSuccess(true);
    }
  
    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="shop/">Go to Home</a>
                    </p>
                </section>
            ) : (
        
        
        <div className="input-container">
            <p ref={errorRef} className={errorMsg ? "errormsg" :
            "offscreen"} aria-live="assertive"></p>

            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input 
                    type="text" 
                    id="" 
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    id="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />

                <button>Sign In</button>

            </form>

            <p>
                Need an Account? <br />
                <span className="line">
                    <a href="register/">Sign Up</a>
                </span>
            </p>

        </div>
            )}
            </>
  )
}
