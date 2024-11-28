import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ChatsPage from "./src/pages/ChatsPage";
import ChatPage from "./src/pages/ChatPage";
import ProfilePage from "./src/pages/ProfilePage";
import RegisterPage from "./src/pages/RegisterPage";
import AuthPage from "./src/pages/AuthPage";
import AuthManager from "./managers/auth/AuthManager";
import AuthProvider from "./context/AuthContext";


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<ChatsPage />}/>
                <Route path="/chat/:id" element={<ChatPage />}/>
                <Route path="/edit" element={<ProfilePage />}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
