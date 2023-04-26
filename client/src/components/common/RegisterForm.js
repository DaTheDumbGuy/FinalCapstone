import React, { useEffect, useState } from 'react'

function RegisterForm({ onSubmit, serverError }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            onSubmit({ firstName, lastName, email, password, confirm_password });
        } else {
            setErrors(validationErrors);
        }
    };
    const validate = () => {
        const errors = {};
        if (!firstName) {
            errors.firstName = 'First Name is required';
        }

        if (!lastName) {
            errors.lastName = 'Last Name is required';
        }
        if (!password) {
            errors.password = 'Password is required';
        }
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }
        if (!confirm_password) {
            errors.confirm_password = 'Confirm Password is required';
        }
        if (password && confirm_password) {
            if (password !== confirm_password) {
                errors.confirm_password = 'Password do not match';
            }
        }
        return errors;
    }

    useEffect(() => {
        setErrors({});
    }, [firstName, lastName, password, email, confirm_password])
    return (
        <form onSubmit={handleSubmit}>
            <div className='serverError'>
                {serverError && <p>{serverError}</p>}
            </div>
            <div className='card'>
                <h1>Sign Up</h1>
                <div className="inputBox">
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <label className={firstName ? 'inputLabel' : ''}>First Name</label>
                </div>
                <div className="errContainer">{errors.firstName && <span className='errorMsg'>{errors.firstName}</span>}</div>

                <div className="inputBox">
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}

                    />
                    <label className={lastName ? 'inputLabel' : ''}>Last Name</label>
                </div>
                <div className="errContainer">{errors.lastName && <span className='errorMsg'>{errors.lastName}</span>}</div>
                <div className="inputBox">
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label className={email ? 'inputLabel' : ''}>Email</label>
                </div>
                <div className="errContainer">{errors.email && <span className='errorMsg'>{errors.email}</span>}</div>

                <div className="inputBox">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <label className={password ? 'inputLabel' : ''}>Password</label>
                </div>
                <div className="errContainer">{errors.password && <span className='errorMsg'>{errors.password}</span>}</div>

                <div className="inputBox">
                    <input
                        type="password"
                        id="confirm_password"
                        value={confirm_password}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    <label className={confirm_password ? 'inputLabel' : ''}>Confirm Password</label>
                </div>
                <div className="errContainer">{errors.confirm_password && <span className='errorMsg'>{errors.confirm_password}</span>}</div>
                <div className="btnContainer"><button type="submit" className='enter'>Submit</button></div>
            </div>

        </form>
    )
}

export default RegisterForm