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

const socket = io({ autoConnect: false });

const useLoginManager = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState();
    return [isLoggedIn, setIsLoggedIn, userName, setUserName];
};

const useSessionValidator = (setIsLoggedIn, setUserName) => {
    const redirect = useRedirector();
    // useEffect(() => {
    //     axios.post('../api/validate-previous-session').then((response) => {
    //         if (response['data']['status'] === 'valid') {
    //             setIsLoggedIn(true);
    //             setUserName(response['data']['userName']);
    //             redirect('../', { replace: true });
    //         }
    //     });
    // }, [setIsLoggedIn, redirect]);
};

function App() {
    // const [isAuth, setIsAuth] = useState(false);
    // const [isLoading, setLoading] = useState(true);
    // useEffect(() => {
    //     if (localStorage.getItem('auth')) {
    //         setIsAuth(true);
    //     }
    //     setLoading(false);
    // }, []);
    // return (
    //     <AuthContext.Provider
    //         value={{
    //             isAuth,
    //             setIsAuth,
    //             isLoading,
    //         }}
    //     >
    //         <BrowserRouter>
    //             <AppRouter />
    //         </BrowserRouter>
    //     </AuthContext.Provider>
    // );

    const [isLoggedIn, setIsLoggedIn, userName, setUserName] =
        useLoginManager();
    useSessionValidator(setIsLoggedIn, setUserName);
    const appContext = {
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        socket: socket,
        userName: userName,
    };
    return (
        <div>
            <Outlet context={appContext} />
            <MainPage />
        </div>
    );
}

export default App;
