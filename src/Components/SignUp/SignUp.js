import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        console.log(user)
        navigate('/')
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }




    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('You two password did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return;
        }
        setError('')
        setSuccess('User created')
        console.log('user created :)')

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>

                <form onSubmit={handleCreateUser} className='form'>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirem-password" id="" required />
                    </div>
                    <p className='form-error'>{error}</p>
                    <p className='form-success'>{success}</p>
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