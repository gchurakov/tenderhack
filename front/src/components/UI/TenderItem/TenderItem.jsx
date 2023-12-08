import React from 'react';
import css from './TenderItem.module.css';
import { Button } from 'react-bootstrap';

function TenderItem({ tender }) {
    return (
        <Button
            variant='secondary'
            className={css.container}
            onClick={() => console.log('hello')}
        >
            <span>Тендер № {tender.name}</span>
        </Button>
    );
}

export default TenderItem;
