import React from 'react';
import css from './TenderList.module.css';
import TenderItem from '../TenderItem/TenderItem';

function TenderList({ tenders, onTenderSelected }) {
    return (
        <div className={css.container}>
            {tenders.map((tender, i) => (
                <TenderItem
                    key={i}
                    tender={tender}
                    onTenderSelected={onTenderSelected}
                />
            ))}
        </div>
    );
}

export default TenderList;
