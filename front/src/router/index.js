import LoginPage from '../components/pages/LoginPage';
import MainPage from '../components/pages/MainPage/MainPage';

export const privateRoutes = [
    { path: '/messages', component: MainPage, exact: true },
];

export const publicRoutes = [
    { path: '/login', component: LoginPage, exact: true },
    // { path: '/register', component: MainPage, exact: true },
];
