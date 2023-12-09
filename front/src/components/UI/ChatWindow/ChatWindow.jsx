import React, { useState } from 'react';
import css from './ChatWindow.module.css';
import CreateContractModal from '../CreateContractModal/CreateContractModal';
import Button from 'react-bootstrap/Button';

function ChatWindow({ selectedTender }) {
    return (
        <div className={css.container}>
            {selectedTender == null ? (
                <div>Empty</div>
            ) : (
                <div>{selectedTender.name}</div>
            )}
            <CreateContractModal />
        </div>
    );
}

export default ChatWindow;
