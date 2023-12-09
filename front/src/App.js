import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/UI/AppRouter';
import { AuthContext } from './context';
/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { useRedirector } from './modules/utilities';
import { Outlet } from 'react-router-dom';
import io from 'socket.io-client';
import MainPage from './components/pages/MainPage';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const socket = io({ autoConnect: false });

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsLoggedIn(true);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                socket,
                isLoading,
            }}
        >
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
