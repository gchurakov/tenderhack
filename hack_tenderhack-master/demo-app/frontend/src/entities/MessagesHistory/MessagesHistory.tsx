import { Card } from '@mantine/core';
import { Message } from '../Message';
import './MessagesHistory.css';
import { useChatStore } from '@/store';
import InfoMessage from '@/components/messages/InfoMessage/InfoMessage'
import MsgPos from '@/components/chat/MessagePosition'

export const MessagesHistory = () => {
  const { messages } = useChatStore();

  return (
    <Card withBorder padding="md" className="messages container">
      {messages.map((message, idx) => (
        // <MsgPos pos={message.direction} key={idx}>
          // <InfoMessage><span>{message.payload}</span></InfoMessage>
        // </MsgPos> 
        <Message
          content={message.type}
          orientation={message.direction}
          message={message.payload}
          key={idx}
        />
      ))}
    </Card>
  );
};
