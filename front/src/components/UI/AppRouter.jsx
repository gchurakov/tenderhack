import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router';
import { AuthContext } from '../../context';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';

const AppRouter = () => {
    const { isLoggedIn, isLoading } = useContext(AuthContext);
    console.log(isLoggedIn);

    // if (isLoading) {
    //     return <Loader/>
    // }

    return isLoggedIn ? (
        <Switch>
            {privateRoutes.map((route) => (
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            ))}
            <Redirect to='/' />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map((route) => (
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            ))}
            <Redirect to='/' />
        </Switch>
    );
};

export default AppRouter;
