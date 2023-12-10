import { Card, Text as MantineText } from '@mantine/core';
import EditDynamicFieldForm from '@/components/forms/EditDynamicFieldForm/EditDynamicFieldForm';
import './Message.css';
import { FormMessage, MessageType } from '@/shared/types';
import { FormMessageView } from './sub';
import MsgPos from '@/components/chat/MessagePosition'
import InfoMessage from '@/components/messages/InfoMessage/InfoMessage'
import { Typography } from '@mui/material';
import CreateContractModal from '@/components/CreateContractModal/CreateContractModal';
import CustomerEditedRedaction from '@/components/forms/CustomerEditedRedaction/CustomerEditedRedaction';

interface Props {
  message: string;
  content: MessageType;
  orientation?: 'right' | 'left';
}

export const Message = ({ content, message, orientation = 'left' }: Props) => {
  const className = `message ${orientation}`;

  if (content === MessageType.FORM) {
    return <MsgPos pos={orientation==='left'?'0':'1'}><EditDynamicFieldForm className='message' field={"произвольное поле"}/></MsgPos>
  }
  if (content === MessageType.INFO) {
    return <MsgPos pos={orientation==='left'?'0':'1'}><InfoMessage className='message'><Typography>{message}</Typography></InfoMessage></MsgPos>
  }
  if (content === MessageType.FORM2) {
    return <MsgPos pos={orientation==='left'?'0':'1'}><CreateContractModal className=''/></MsgPos>
  }
  if (content === MessageType.FORM_PREMADE) {
    return <MsgPos pos={orientation==='left'?'0':'1'}><CustomerEditedRedaction data={{idDocument:'1', item:'1', proposedRedaction: 'уменьшение количества стульев', customerRedaction:'количество стульев остаётся', comment:'мы не можем себе это позволить'}} className=''/></MsgPos>
  }
  

  return (
    <Card className={className} shadow="xs" padding="sm" radius="md" withBorder>
      <MantineText size="sm" c="dimmed">
        {message}
      </MantineText>
    </Card>
  );
};
