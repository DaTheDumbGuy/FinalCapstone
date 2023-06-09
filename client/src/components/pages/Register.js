import React, { useState } from 'react';
import RegisterForm from '../common/RegisterForm';
import '../../styles/pages/Register.css';
import { register } from '../../services/api';

function Register() {
    const [error, setError] = useState('');
    // const [response, setResponse] = useState('');
    const handleRegister = async (formData) => {
        try {
            const response = await register(formData);
            console.log('Register successful with response data: ', response.data);
            console.log(`Success -> ${JSON.stringify(response.data.message)}`);
            alert("Success Register!");
            window.location.href = '/login';
            // setResponse(response.data.message);
        } catch (error) {
            console.error('Error in registration: ', error);
            console.log(formData);
            setError(error.response.data.message);
        }
    };

    return (
        <div className='register-page'>
            {/* {error ? <p>{error}</p> : response ? <p>{response}</p> : null} */}
            <RegisterForm onSubmit={handleRegister} serverError={error} />
        </div>
    );
}

export default Register;
