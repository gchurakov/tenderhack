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
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender2',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender3',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number:'228 ук рф'
            },
        ]);
    }, []);

    return (
        <div className={css.container}>
            <TenderList
                tenders={tenders}
                onTenderSelected={handleTenderClick}
            />
            <ChatWindow selectedTender={selectedTender}/>
        </div>
    );
}

export default MainPage;
