import MainPage from '../components/pages/MainPage';
import LoginPage from '../components/pages/LoginPage';

export const privateRoutes = [
    { path: '/messages', component: MainPage, exact: true },
];

export const publicRoutes = [
    { path: '/login', component: LoginPage, exact: true },
];
