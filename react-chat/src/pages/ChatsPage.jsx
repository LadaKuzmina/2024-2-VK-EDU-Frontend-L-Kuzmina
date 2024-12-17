import React, { useEffect, useState, useContext } from 'react';
import HeaderChats from '../components/header-chats/HeaderChats';
import MainChats from '../components/main-chats/MainChats';
import {AuthContext} from '../context/AuthContext.jsx';
import NewButtonChat from '../components/new-button-chat/NewButtonChat';
import axiosInstance from '../api/apiService.js';


function ChatsPage () {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const { authData } = useContext(AuthContext);
  const [isHaveChats, setHaveChats] = useState(true);

  useEffect(() => {
    const loadChats = async () => {
      try {
        const response = await axiosInstance.get('/chats/', {
          headers: {
            Authorization: `Bearer ${authData.accessToken}`,
          },
        });
        if (response.status !== 200) {
          setHaveChats(false);
          throw new Error('Failed to fetch chats');
        }
        const data = await response.data;
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
      {isHaveChats ?
        <MainChats
          chats={chats}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />
        :
        <h2>There are no chats</h2>
      }
      <NewButtonChat/>
    </>
  );
}

export default ChatsPage;
