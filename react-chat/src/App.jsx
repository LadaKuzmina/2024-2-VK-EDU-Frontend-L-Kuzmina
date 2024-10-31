import ChatsPage from "./pages/ChatsPage";
import ChatPage from "./pages/ChatPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<ChatsPage />} />
                <Route path={'/chat/:id'} element={<ChatPage />} />
                <Route path={'/edit'} element={<ProfilePage/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
