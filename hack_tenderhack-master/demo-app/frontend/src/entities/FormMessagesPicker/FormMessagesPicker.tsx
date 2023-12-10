import { Button } from '@mantine/core';
import { useChatStore } from '@/store';
import { FormMessage } from '@/shared/types';

import './FormMessagesPicker.css';

export const FormMessagesPicker = () => {
  const { addMessage, sendMessage } = useChatStore();

  const sendFormAgreement = () => {
    addMessage({
      payload: FormMessage.FORM_AGREEMENT,
      type: 'form',
      direction: 'right',
    });
    sendMessage({
      payload: FormMessage.FORM_AGREEMENT,
      type: 'form',
    });
  };

  const sendBigForm = () => {
    addMessage({
      payload: FormMessage.FORM_AGREEMENT,
      type: 'form2',
      direction: 'right',
    });
    sendMessage({
      payload: FormMessage.FORM_AGREEMENT,
      type: 'form2',
    });
  };

  const sendInfo = () => {
    addMessage({
      payload: FormMessage.MSG_INFO,
      type: 'info',
      direction: 'right',
    });
    sendMessage({
      payload: FormMessage.MSG_INFO,
      type: 'info',
    });
  };

  return (
    <div className="form-picker">
      <Button onClick={sendFormAgreement}>Отправить форму соглашения</Button>
      <Button onClick={sendBigForm}>Отправить форму создания</Button>
      <Button onClick={sendInfo}>Отправить сообщение от системы</Button>
    </div>
  );
};
