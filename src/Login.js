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
                <img classname="login__logo" src="https://lh3.googleusercontent.com/proxy/YMbSs8n62N7vKSvbXUAsTB7Uha6NiWC-VWNtUPxVoa6CkVzjM4nW2Qc97ayrJbJO3FGZ_Wbrdehp5L-QfQrZBQ-LBa2K5C7tNQ-B2OFmrA69KF8"/>
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
