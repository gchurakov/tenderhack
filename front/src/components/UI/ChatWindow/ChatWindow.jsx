import React from 'react';
import css from './ChatWindow.module.css';
import ChatHeader from '../ChatHeader/ChatHeader';
import DocumentForm from '../forms/DocumentForm/DocumentForm';
import DocumentChoiceForm from '../forms/DocumentChoiceForm/DocumentChoiceForm';
import ActionChoiceForm from '../forms/ActionChoiceForm/ActionChoiceForm';
import ArbitraryItemEdit from '../forms/ArbitraryItemEdit/ArbitraryItemEdit';
import ArbitraryItemMessage from '../messages/ArbitraryItemMessage/ArbitraryItemMessage';

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
                </div>
            )}
        </div>
    );
}

export default ChatWindow;
