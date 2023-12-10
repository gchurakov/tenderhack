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
    // sendMessage({
    //   payload: FormMessage.FORM_AGREEMENT,
    //   type: 'form',
    // });
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
      payload: "Ваши изменения отправлены заказчику, ожидайте его решения. Уведомление продублируется на почту",
      type: 'info',
      direction: 'right',
    });
    sendMessage({
      payload: "Ваши изменения отправлены заказчику, ожидайте его решения. Уведомление продублируется на почту",
      type: 'info',
    });
  };

  const sendPreMadeMessage = ()=>{
    addMessage({
      payload: FormMessage.FORM_PREMADE,
      type: 'FORM_PREMADE',
      direction: 'left',
    });
  }

  const onDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = link.href.substring(link.href.lastIndexOf('/')+1);
    link.click();
  }

  return (
    <div className="form-picker">
      <Button onClick={sendFormAgreement}>Отправить форму соглашения</Button>
      <Button onClick={sendBigForm}>Отправить форму создания</Button>
      <Button onClick={sendInfo}>Отправить сообщение от системы</Button>
      <Button onClick={sendPreMadeMessage}>текст</Button>
      <a
        href={`http://127.0.0.1:5000/api/get_contract`}
        download="Example-document"
        target="_blank"
        rel="noreferrer"
      >
        <Button>скачать файл</Button>
      </a>
      <a
        href={`http://127.0.0.1:5000/api/get_protocol_new`}
        download="Example-document"
        target="_blank"
        rel="noreferrer"
      >
        <Button>скачать протокол разногласий</Button>
      </a>
      
    </div>
  );
};
