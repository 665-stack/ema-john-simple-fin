import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>

                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                        <Button>Sign Out</Button>
                        :
                        <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;