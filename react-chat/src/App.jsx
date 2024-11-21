import ChatsPage from "./pages/ChatsPage";
import ChatPage from "./pages/ChatPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import AuthPage from "./pages/AuthPage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<ChatsPage />} />
                <Route path={'/chat/:id'} element={<ChatPage />} />
                <Route path={'/edit'} element={<ProfilePage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/auth'} element={<AuthPage/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
