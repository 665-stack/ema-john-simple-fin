import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    // const navigate = useNavigate()

    const email = user?.email;

    const handleNameBlur = event => {
        setName(event.target.value)
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }


    const handleCreateUser = event => {
        event.preventDefault()
        const shipping = { name, email, address, phone };
        console.log(shipping);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>

                <form onSubmit={handleCreateUser} className='form'>

                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="number" name="phone" id="" required />
                    </div>

                    <p className='form-error'>{error}</p>
                    <p className='form-success'>{success}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />

                </form>

            </div>
        </div>
    );
};

export default Shipment;