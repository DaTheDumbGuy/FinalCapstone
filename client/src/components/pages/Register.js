import React from 'react';
import RegisterForm from '../common/RegisterForm';

function Register() {
    const handleRegister = async (formData) => {

    };

    return (
        <div>
            <h1>This is Register</h1>
            <RegisterForm onSubmit={handleRegister} />
        </div>
    );
}

export default Register;
