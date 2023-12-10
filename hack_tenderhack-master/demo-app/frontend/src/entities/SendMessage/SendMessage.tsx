import { Button, Textarea } from '@mantine/core';

import './SendMessage.css';
import { useChatStore } from '@/store';
import { MessageType } from '@/shared/types';

export const SendMessage = () => {
  const {
    currentMessage,
    setCurrentMessage,
    addMessage,
    sendMessage: sendMessageToSocket,
  } = useChatStore();

  const sendMessage = () => {
    if (!currentMessage.trim()) {
      return;
    }

    setCurrentMessage('');

    const message = {
      payload: currentMessage,
      type: MessageType.TEXT,
      direction: 'right',
    };

    addMessage(message);
    sendMessageToSocket(message);
  };

  return (
    <div className="message-input">
      <Textarea
        className="input"
        placeholder="Введите сообщение для отправки"
        autosize
        minRows={2}
        maxRows={4}
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value.trim())}
      />
      <Button className="send-btn" onClick={sendMessage}>
        Отправить
      </Button>
    </div>
  );
};
