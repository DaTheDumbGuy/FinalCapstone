import React from 'react';
import LoginForm from '../common/LoginForm';

function Login() {
    const handleLogin = (formData) => {

    };

    return (
        <div>
            <h1>This is Login!</h1>
            <LoginForm onSubmit={handleLogin} />
            <h1>Test</h1>
        </div>
    );
}

export default Login;
