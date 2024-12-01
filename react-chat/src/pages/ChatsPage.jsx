import React, { useEffect, useState, useContext } from 'react';
import HeaderChats from "../components/header-chats/HeaderChats";
import MainChats from "../components/main-chats/MainChats";
import {AuthContext} from "../context/AuthContext";


function ChatsPage() {
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const { authData } = useContext(AuthContext);

    useEffect(() => {
        const loadChats = async () => {
            try {
                const response = await fetch('/api/chats/', {
                    headers: {
                        Authorization: `Bearer ${authData.accessToken}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch chats');
                }
                const data = await response.json();
                setChats(data.results);
            } catch (error) {
                console.error('Error fetching chats:', error);
            }
        };

        loadChats();
    }, [authData.accessToken]);

    return (
        <>
            <HeaderChats />
            <MainChats
                chats={chats}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
            />
        </>
    );
}

export default ChatsPage;
