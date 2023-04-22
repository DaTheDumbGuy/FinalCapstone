import React, { useState } from 'react'

function RegisterForm({ onSubmit }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [occupation, setOccupation] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            onSubmit({ firstName, lastName, address, phoneNumber, email, password, gender, maritalStatus, occupation });
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
            errors.password = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }
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
                <label htmlFor='address'>Address</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                {errors.address && <span>{errors.address}</span>}
            </div>

            <div>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                />
                {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
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
                <label htmlFor='male'>Gender</label>
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    onChange={(event) => setGender(event.target.value)}
                />
                <label htmlFor='male'>Male</label>

                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    onChange={(event) => setGender(event.target.value)}
                />
                <label htmlFor='female'>Female</label>
            </div>

            <div>
                <label htmlFor="marital-status">Marital Status</label>
                <select id="marital-status" value={maritalStatus} onChange={(event) => setMaritalStatus(event.target.value)}>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                </select>
            </div>

            <div>
                <label htmlFor='occupation'>occupation</label>
                <input
                    type="text"
                    id="occupation"
                    value={occupation}
                    onChange={(event) => setOccupation(event.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default RegisterForm