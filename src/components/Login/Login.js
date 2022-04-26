import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

async function loginUser(credentials) {
    console.log("Logging in user with credentials: ", credentials);
    return "testToken1234";
}

export default function Login({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });

        setToken(token);
    }

    return (
        <div className='login-wrapper'>
            <h1>Please Log In</h1>
            <div className='form-wrapper'>
                <form onSubmit={handleLogin}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' onChange={e => setUsername(e.target.value)} />
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' onChange={e => setPassword(e.target.value)}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}