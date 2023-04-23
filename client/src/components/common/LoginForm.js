import React, { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import '../../styles/common/LoginForm.css';


function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            onSubmit({ email, password });
        } else {
            setErrors(validationErrors);
        }
    };

    const validate = () => {
        const errors = {};
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }
        if (!password) {
            errors.password = 'Password is required';
        }
        return errors;
    };
    useEffect(() => {
        setErrors({});
    }, [email, password]);

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <div >
                <div className="input-container">
                    <div className="input-icon">
                        <PersonIcon />
                    </div>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='Email'
                    />
                </div>
                <div className="error-container">
                    {errors.email && <span>{errors.email}</span>}
                </div>
            </div>
            <div>
                <div className="input-container">
                    <div className="input-icon">
                        <LockIcon />
                    </div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder='Password'
                    />
                </div>
                <div className="error-container">
                    {errors.password && <span >{errors.password}</span>}
                </div>
            </div>
            <button type="submit" className='loginBTN'>Sign In</button>
            <div className="fpContainer"><a href="/forgotPassword" className='forgotPassword'><small>Forgot password?</small></a></div>
        </form>
    );
}

export default LoginForm;
