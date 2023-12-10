import { FormMessage } from '@/shared/types';
import { DeclineEdit } from './DeclineEdit';
import { AcceptEdit } from './AcceptEdit';
import { FormAgreement } from './FormAgreement';

import './FormMessageView.css';
import { Card } from '@mantine/core';

interface Props {
  type: FormMessage;
  orientation: 'left' | 'right';
}

export const FormMessageView = ({ type, orientation }: Props) => {
  const getComponent = () => {
    switch (type) {
      case FormMessage.FORM_AGREEMENT:
        return <FormAgreement />;
      case FormMessage.ACCEPT_EDIT:
        return <AcceptEdit />;
      case FormMessage.DECLINE_EDIT:
      default:
        return <DeclineEdit />;
    }
  };

  return (
    <Card withBorder padding="sm" className={`view ${orientation}`}>
      {getComponent()}
    </Card>
  );
};
