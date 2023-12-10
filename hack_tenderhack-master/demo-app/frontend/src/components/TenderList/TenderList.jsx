import React from 'react';
import css from './TenderList.module.css';
import TenderItem from '../TenderItem/TenderItem';
import Searchbar from '../SearchBar/SearchBar'

function TenderList({ tenders, onTenderSelected }) {
    return (
        <div style={{height:'100%', overflowY:'auto', flexShrink:'0'}}>
        <Searchbar/>
        <div className={css.container} >
            {tenders.map((tender, i) => (
                <TenderItem
                    key={i}
                    tender={tender}
                    onTenderSelected={onTenderSelected}
                />
            ))}
        </div>
        </div>
    );
}

export default TenderList;
