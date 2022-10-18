import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()


    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate('/')
    }




    const handleUserSignIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
        console.log(user);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>

                <form onSubmit={handleUserSignIn} className='form' >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" id="" required />
                    </div>
                    <p className='form-error'>{error?.message}</p>
                    {
                        loading && <p>Loading... </p>
                    }

                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='form-text'>New to Ema-John? <Link className='form-link' to="/signUp"> Create an account</Link></p>

                <div className="form-or-line">
                    <div></div>
                    <span>or</span>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Login;