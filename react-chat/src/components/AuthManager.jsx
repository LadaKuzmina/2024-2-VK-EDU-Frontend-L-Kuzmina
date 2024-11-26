import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {AuthContext} from "../api/context/AuthContext";


const AuthManager = () => {
    const { authData } = useContext(AuthContext);

    // Если токен есть, позволяем доступ к защищённым маршрутам
    if (authData.accessToken) {
        return <Outlet />;
    }

    // Если токена нет, перенаправляем на страницу авторизации
    return <Navigate to="/auth" replace />;
};

export default AuthManager;
