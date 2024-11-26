import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ChatsPage from "./pages/ChatsPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import AuthPage from "./pages/AuthPage";
import AuthManager from "./components/AuthManager";
import AuthProvider from "./api/context/AuthContext";


function App() {
    return (
        <AuthProvider>
            <HashRouter>
                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route
                        path="/"
                        element={
                            <AuthManager>
                                <ChatsPage />
                            </AuthManager>
                        }
                    />
                    <Route
                        path="/chat/:id"
                        element={
                            <AuthManager>
                                <ChatPage />
                            </AuthManager>
                        }
                    />
                    <Route
                        path="/edit"
                        element={
                            <AuthManager>
                                <ProfilePage />
                            </AuthManager>
                        }
                    />
                </Routes>
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
