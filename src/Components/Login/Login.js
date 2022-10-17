import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>

                <form className='form' action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="Password" id="" />
                    </div>
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