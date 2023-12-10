import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context';

function NavBar() {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };

    return (
        <div className='navbar'>
            <Button onClick={logout}>Выйти</Button>
        </div>
    );
}

export default NavBar;
