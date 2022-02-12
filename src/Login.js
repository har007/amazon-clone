import React,{useState} from 'react'
import './Login.css'
import {Link, useHistory } from 'react-router-dom';
import {auth} from './firebase';

function Login() {

    const history=useHistory();
    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');

    const login = e =>{
        e.preventDefault();//this stops the refresh!!!

        //do the login logic..
        auth.signInWithEmailAndPassword(email,password).then((auth) => {
            //logged in redirect to home  page
            console.log("login>>>",auth);
            history.push('/');
        }).catch(e => alert(e.message));
    }
    const register = e =>{
        e.preventDefault();//this stops the refresh!!!

        //do the register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth =>{
            //created a user and logged in, redirect to home page
            console.log("Register>>>",auth);
               if (auth) {
                    history.push('/')
                }
        }).catch(e => alert(e.message));


    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                  alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input  value={password} onChange={e => setPassword(e.target.value)}type="password" />
                    <button onClick={login}className="login__signInButton" type="submit">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register}className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
