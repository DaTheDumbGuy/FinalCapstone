import React, { useState } from 'react';
import LoginForm from '../common/LoginForm';
import { login } from '../../services/api';
import '../../styles/pages/Login.css';

function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleLogin = async (formData) => {
        try {
            const response = await login(formData);
            console.log(response.data);
            console.log('Redirecting to dashboard...');
            alert("Success Login!");
            window.location.href = '/';
        } catch (error) {
            console.error(error);
            if (error.response.status === 401) {
                setErrorMessage('Invalid email or password');
            } else {
                setErrorMessage('Server error');
            }
            setSubmitted(true);
        }
    };
    const handleAnimationEnd = () => {
        setSubmitted(false);
    };

    return (
        <div className='page'>
            <div className='formContainer'>
                <LoginForm onSubmit={handleLogin} serverError={errorMessage} />
                <div
                    className={`seContainer ${submitted ? 'buzz' : ''}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    {errorMessage && <p className='server-error'>{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}

export default Login;
