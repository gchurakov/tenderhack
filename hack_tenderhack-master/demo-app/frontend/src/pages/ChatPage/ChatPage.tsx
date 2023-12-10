import { MessagesHistory } from '@/entities/MessagesHistory';
import { FormMessagesPicker } from '@/entities/FormMessagesPicker';
import { SendMessage } from '@/entities/SendMessage/SendMessage';

import './ChatPage.css';
import { useChatStore } from '@/store';
import { useEffect } from 'react';
const socket = new WebSocket('ws://localhost:3000');

const ChatPage = () => {
  const { addMessage, setSocketCallback } = useChatStore();

  useEffect(() => {
    setSocketCallback((message: string) => socket.send(message));
    socket.onmessage = async (event) => {
      try {
        const data = await event.data.text();
        const parsedData = JSON.parse(data);
        addMessage({
          ...parsedData,
          direction: 'left',
        });
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div className="chat-wrapper">
      <div className="chat">
        <MessagesHistory />
        <FormMessagesPicker />
        <SendMessage />
      </div>
    </div>
  );
};

export default ChatPage;
