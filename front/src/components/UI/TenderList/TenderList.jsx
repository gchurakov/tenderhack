import React from 'react';
import css from './TenderList.module.css';
import TenderItem from '../TenderItem/TenderItem';

function TenderList({ tenders }) {
    return (
        <div className={css.container}>
            {tenders.map((tender, i) => (
                <TenderItem key={i} tender={tender} />
            ))}
        </div>
    );
}

export default TenderList;
