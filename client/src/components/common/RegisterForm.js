import React, { useEffect, useState } from 'react'

function RegisterForm({ onSubmit }) {
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
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                {errors.firstName && <span>{errors.firstName}</span>}
            </div>

            <div>
                <label htmlFor='lastName'>Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                {errors.lastName && <span>{errors.lastName}</span>}
            </div>

            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>

            <div>
                <label htmlFor='confirm_password'>Confirm Password</label>
                <input
                    type="password"
                    id="confirm_password"
                    value={confirm_password}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
                {errors.confirm_password && <span>{errors.confirm_password}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default RegisterForm