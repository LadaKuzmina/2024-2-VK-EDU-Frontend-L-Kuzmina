import React, { useContext } from 'react';
import {HashRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import App from "../../App";
import RegisterPage from "../../src/pages/RegisterPage";
import AuthPage from "../../src/pages/AuthPage";


const AuthManager = () => {
    const { authData } = useContext(AuthContext);

    return authData.accessToken
        ? <App/>
        : (
            <HashRouter>
                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                </Routes>
            </HashRouter>
        )
};

export default AuthManager;
