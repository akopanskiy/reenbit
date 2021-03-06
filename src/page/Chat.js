import Sidebar from '../component/Sidebar';
import FieldMessages from '../component/FieldMessages';

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { fetchAllContacts, fetchAllMessages } from '../services/contactsAPI';

import { MessageContext } from '../context/lastMessage';

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem('messages')) ?? [],
  );

  useEffect(() => {
    fetchAllContacts().then(res => setUsers(res.data));
  }, []);

  useEffect(() => {
    fetchAllMessages().then(res => {
      localStorage.setItem('messages', JSON.stringify(res.data));
      setMessages(res.data);
    });
  }, [messages]);

  return (
    <>
      <MessageContext.Provider value={{ messages }}>
        <Sidebar users={users} />
        <Routes>
          <Route path="chats/:id" element={<FieldMessages />} />
        </Routes>
      </MessageContext.Provider>
    </>
  );
};
export default Chat;
