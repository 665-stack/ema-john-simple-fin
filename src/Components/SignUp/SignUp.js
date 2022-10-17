import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>

                <form className='form' action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirem-password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='form-text'>Already have an account? <Link className='form-link' to="/login"> Login </Link></p>

                <div className="form-or-line">
                    <div></div>
                    <span>or</span>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;