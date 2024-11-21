import React, { useState } from 'react';
import {loginUser} from "../api/apiService";


const AuthPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [tokens, setTokens] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(credentials);
            setTokens(data);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage(error.response?.data?.detail || 'Login failed');
            setTokens(null);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {tokens && (
                <div>
                    <p style={{ color: 'green' }}>successful!</p>
                </div>
            )}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AuthPage;