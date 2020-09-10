import React, { useState } from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const SignIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push("/")
        })
        .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" alt="Login logo" src="https://www.nicepng.com/png/full/228-2281836_vault-logo-available-amazon-app-store.png"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <button className="login__button" type="submit" onClick={SignIn}>Sign in</button>
                    <p>By singing-in you agree to the T&C by amazon-clone </p>
                    <button className="login__register" onClick={register}>Create your amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
