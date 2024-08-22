import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const LoginPopup = ({ setShowLogin }) => {
    const navigate = useNavigate();

    // Combined state for email and password
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform your login/signup logic using the formData state
        // For now, let's just log the formData
        console.log(formData);
    };

    const navigatePage = () => {
        navigate('/signuppopup');
    };

    return (
        <div className='login-popup'>
            <form onSubmit={handleSubmit} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>Login</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    <input type="email" name="email" placeholder='Your email' value={email} onChange={handleInputChange} required />
                    <input type="password" name="password" placeholder='Password' value={password} onChange={handleInputChange} required />
                </div>
                <button type="submit">Login</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                <p>Create a new account? <span onClick={navigatePage}>Click here</span></p>
            </form>
        </div>
    );
};

export default LoginPopup;
