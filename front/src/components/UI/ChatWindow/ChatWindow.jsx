import React from 'react';
import { Typography } from '@mui/material';
import css from './ChatWindow.module.css';
import ChatHeader from '../ChatHeader/ChatHeader';
import DocumentForm from '../forms/DocumentForm/DocumentForm';
import DocumentChoiceForm from '../forms/DocumentChoiceForm/DocumentChoiceForm';
import ActionChoiceForm from '../forms/ActionChoiceForm/ActionChoiceForm';
import ArbitraryItemEdit from '../forms/ArbitraryItemEdit/ArbitraryItemEdit';
import ArbitraryItemMessage from '../messages/ArbitraryItemMessage/ArbitraryItemMessage';
import ErrorMessage from '../messages/ErrorMessage/ErrorMessage';
import InfoMessage from '../messages/InfoMessage/InfoMessage';
import SuccessMessage from '../messages/SuccessMessage/SuccessMessage';
import EditDynamicFieldForm from '../forms/EditDynamicFieldForm/EditDynamicFieldForm';
import CustomerMadeChanges from '../forms/CustomerMadeChanges/CustomerMadeChanges';
import CustomerEditedRedaction from '../forms/CustomerEditedRedaction/CustomerEditedRedaction';
import EditDynamicFieldFixedItemForm from '../forms/EditDynamicFieldFixedItemForm/EditDynamicFieldFixedItemForm';
import ArbitraryItemForm from '../forms/ArbitraryItemForm/ArbitraryItemForm';

function ChatWindow({ selectedTender }) {
    return (
        <div className={css.container}>
            {selectedTender == null ? (
                <div>Empty</div>
            ) : (
                <div style={{overflowY: 'auto', height: '100%'}}>
                    <ChatHeader selectedTender={selectedTender} />
                    <DocumentForm />
                    <DocumentChoiceForm/>
                    <ActionChoiceForm />
                    <ArbitraryItemEdit />
                    <ArbitraryItemMessage />
                    <InfoMessage><Typography>Ваши изменения отправлены заказчику, ожидайте его решения. Уведомление также продублируется вам на почту.</Typography></InfoMessage>
                    <SuccessMessage><Typography>Здравствуйте! Заказчик одобрил ваши изменения.</Typography></SuccessMessage>
                    <ErrorMessage><Typography>Здравствуйте! Заказчик отказался от ваших изменений.</Typography></ErrorMessage>
                    <CustomerEditedRedaction />
                    <EditDynamicFieldForm data={{field:'количесво стульев'}}/>
                    <InfoMessage><Typography>Ваши изменения отправлены заказчику, ожидайте его решения. Уведомление также продублируется вам на почту.</Typography></InfoMessage>
                    <SuccessMessage><Typography>Здравствуйте! Заказчик одобрил ваши изменения.</Typography></SuccessMessage>
                    <ErrorMessage><Typography>Здравствуйте! Заказчик отказался от ваших изменений.</Typography></ErrorMessage>
                    <CustomerMadeChanges/>
                    <EditDynamicFieldFixedItemForm data={{itemId: 10}} />
                    <ArbitraryItemForm />
                </div>
            )}
        </div>
    );
}

export default ChatWindow;
