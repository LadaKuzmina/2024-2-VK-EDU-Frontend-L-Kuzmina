import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import ChatsPage from "./pages/ChatsPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<ChatsPage />}/>
                <Route path="/chat/:id" element={<ChatPage />}/>
                <Route path="/edit" element={<ProfilePage />}/>
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
