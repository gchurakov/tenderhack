import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginPage = () => {
    const baseUrl = 'http://127.0.0.1:5000';
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setIsLoggedIn(true);
        // localStorage.setItem('auth', 'true');
        // history.push('/');

        axios
            .post(baseUrl + '/api/login', formData)
            .then((response) => {
                console.log('response', response);

                if (response.data !== 'logged in ') {
                    alert('Проверьте введенные данные');
                } else {
                    setIsAuth(true);
                    localStorage.setItem('auth', 'true');
                    history.push('/');
                }
            })
            .catch((e) => console.log(e));
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label='Username'
                variant='outlined'
                name='username'
                value={formData.username}
                onChange={handleChange}
                margin='normal'
                fullWidth
            />
            <TextField
                label='Password'
                type='password'
                variant='outlined'
                name='password'
                value={formData.password}
                onChange={handleChange}
                margin='normal'
                fullWidth
            />
            <Button type='submit' variant='contained' color='primary'>
                Войти
            </Button>
        </form>
    );
};

export default LoginPage;
