import React from 'react';
import css from './TenderItem.module.css';
import Button from '@mui/material/Button';


function TenderItem({ tender, onTenderSelected }) {
    return (
        <Button
            variant='secondary'
            className={[css.container, "mt-2"].join(' ')}
            onClick={() => onTenderSelected(tender)}
            sx={{
                backgroundColor: "#C9D1DF",
                border: "2px solid #000",
            }}
        >
            <span>Тендер № {tender.name}</span>
        </Button>
    );
}

export default TenderItem;
