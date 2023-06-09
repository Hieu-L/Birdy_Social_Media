import { useState } from "react";
import React from 'react';
import './Login.css';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3001';


function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);


    
    const toMainPage = () => { props.onFormSwitch('app') }

    const handleLogin = async(e) => {
        e.preventDefault();
        const user = username;
        const pass = password;

        try{ await axios.post('/api/user/signin', { username : user, password : pass } ).then(res => { console.log(res.data); props.adminHandler(user); toMainPage(); }) }
        catch(e) { setError(true) }
    }



    return (
        <div className="access">
            <div className="log">
                <h2>Login</h2>
            
                <form onSubmit={handleLogin}>
                    <input
                        required
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        required
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={(e) => handleLogin(e)}>Log In</button>
                </form>

                {error ? <div style={{color:"red"}}>Invalid username or invalid password</div> : ""}
                <button type="button" onClick={() => props.onFormSwitch('sign_up')}> Don't have an account? Register here.</button>
            </div>
        </div>
      );
}
    


export default Login