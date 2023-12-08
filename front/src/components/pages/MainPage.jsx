import React, { useEffect, useRef, useState } from 'react';
import SideBar from '../UI/SideBar';
import ChatWindow from '../UI/ChatWindow/ChatWindow';
import TenderList from '../UI/TenderList/TenderList';
import css from './MainPage.module.css';

function MainPage(props) {
    const [selectedTender, setSelectedTender] = useState(null);
    const [tenders, setTenders] = useState([]);

    const handleTenderClick = (tender) => {
        setSelectedTender(tender);
        console.log('handleTenderClick', tender);
    };

    useEffect(() => {
        setTenders([
            {
                name: 'tender1',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
            },
            {
                name: 'tender2',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
            },
            {
                name: 'tender3',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
            },
        ]);
    }, []);

    return (
        <div className={css.container}>
            <TenderList
                tenders={tenders}
                onTenderSelected={handleTenderClick}
            />
            <ChatWindow selectedTender={selectedTender} />
        </div>
    );
}

export default MainPage;
