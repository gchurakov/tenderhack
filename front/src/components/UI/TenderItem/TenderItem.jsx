import React from 'react';
import css from './TenderItem.module.css';
import { Button } from 'react-bootstrap';

function TenderItem({ tender, onTenderSelected }) {
    return (
        <Button
            variant='secondary'
            className={css.container}
            onClick={() => onTenderSelected(tender)}
        >
            <span>Тендер № {tender.name}</span>
        </Button>
    );
}

export default TenderItem;
