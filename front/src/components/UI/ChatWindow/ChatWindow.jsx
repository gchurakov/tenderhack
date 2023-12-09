import React from 'react';
import css from './ChatWindow.module.css';

function ChatWindow({ selectedTender }) {
    return (
        <div className={css.container}>
            {selectedTender == null ? (
                <div>Empty</div>
            ) : (
                <div>{selectedTender.name}</div>
            )}
        </div>
    );
}

export default ChatWindow;
