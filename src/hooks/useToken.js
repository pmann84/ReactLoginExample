import React from 'react';
import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        // const tokenString = sessionStorage.getItem('token');
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        console.log("Getting token from session storage: ", userToken);
        return userToken;
    }

    const [token, setToken] = useState(getToken());
    
    const saveToken = (token) => {
        console.log("Saving token ", token);
        const tokenString = JSON.stringify(token);
        // sessionStorage.setItem('token', tokenString);
        localStorage.setItem('token', tokenString);
        console.log(tokenString);
        setToken(token);
    }

    const removeToken = () => {
        localStorage.removeItem('token');
    }

    return { setToken: saveToken, removeToken, token };
}