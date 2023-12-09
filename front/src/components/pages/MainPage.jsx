import React, { useEffect, useState } from 'react';
import ChatWindow from '../UI/ChatWindow/ChatWindow';
import TenderList from '../UI/TenderList/TenderList';
import css from './MainPage.module.css';
import {
    useMessages,
    useRooms,
    useSocketIOSubscription,
} from '../../modules/helpers';
import { useContextManager } from '../../modules/utilities';

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
                law_number: '228 ук рф',
            },
            {
                name: 'tender2',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender3',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
            {
                name: 'tender4',
                id: '1323141234',
                customer: 'вшэ',
                provider: 'ашот',
                inn: '123456789',
                date: '2019-10-31T01:30:00.000-05:00',
                law_number: '228 ук рф',
            },
        ]);
    }, []);

    const { setIsLoggedIn, socket } = useContextManager();
    const [allMessages, dispatchMessages, newMessage, setNewMessage] =
        useMessages();
    const [currentRoom, setCurrentRoom, availableRooms] = useRooms(
        dispatchMessages,
        socket
    );

    useSocketIOSubscription(dispatchMessages, socket);

    return (
        <div className={css.container}>
            <TenderList
                tenders={tenders}
                onTenderSelected={handleTenderClick}
            />
            <ChatWindow
                selectedTender={selectedTender}
                currentRoom={currentRoom}
                allMessages={allMessages}
                socket={socket}
                setNewMessage={setNewMessage}
                newMessage={newMessage}
                setIsLoggedIn={setIsLoggedIn}
                setCurrentRoom={setCurrentRoom}
                possibleRooms={availableRooms['data']}
            />
        </div>
    );
}

export default MainPage;
