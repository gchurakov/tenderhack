import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContextManager } from './modules/utilities';
import NoMatch from './modules/nomatch/NoMatch';
import Login from './modules/login/Login';
import Register from './modules/register/Register';

function PublicRoute({ restricted, element }) {
    const { isLoggedIn } = useContextManager();
    if (isLoggedIn && restricted) {
        return <Navigate to='../' replace={true} />;
    } else {
        return element;
    }
}

function PrivateRoute({ element }) {
    const { isLoggedIn } = useContextManager();
    if (isLoggedIn) {
        return element;
    } else {
        return <Navigate to='../login' replace={true} />;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route
                        path='login'
                        element={
                            <PublicRoute
                                element={<Login />}
                                restricted={true}
                            />
                        }
                    />
                    <Route
                        path='register'
                        element={
                            <PublicRoute
                                element={<Register />}
                                restricted={true}
                            />
                        }
                    />
                    <Route path='*' element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
    // document.getElementById('root')
);
