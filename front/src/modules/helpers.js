import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

// Messages state management
export function useMessages() {
    const [newMessage, setNewMessage] = useState();
    const [allMessages, dispatchMessages] = useReducer(updateMessages, []);
    return [allMessages, dispatchMessages, newMessage, setNewMessage];
}

function updateMessages(messages, action) {
    switch (action.type) {
        case 'CLEAR_MESSAGES':
            return action.data;
        case 'NEW_MESSAGE':
            return [...messages, action.data];
        case 'ALL_MESSAGES':
            return action.data;
        default:
    }
}

// Room state management
export function useRooms(dispatchMessages, socket) {
    const [availableRooms, setPossibleRooms] = useState([]);
    usePossibleRooms(setPossibleRooms);
    const [currentRoom, setCurrentRoom] = useState('HTML');
    useCurrentRoom(dispatchMessages, socket, currentRoom);
    return [currentRoom, setCurrentRoom, availableRooms];
}

function usePossibleRooms(setPossibleRooms) {
    useEffect(() => {
        async function fetchRooms() {
            setPossibleRooms(await getPossibleRooms());
        }
        fetchRooms();
    }, [setPossibleRooms]);
}

// function useCurrentRoom(dispatchMessages, socket, currentRoom) {
//     useEffect(() => {
//         dispatchMessages({ type: 'CLEAR_MESSAGES', data: [] });
//         socket.emit('update-room', { roomName: currentRoom }, (payload) => {
//             socket.emit('load-all-messages', (payload) => {
//                 dispatchMessages({
//                     type: 'ALL_MESSAGES',
//                     data: payload['db_messages'],
//                 });
//             });
//         });
//     }, [currentRoom, dispatchMessages, socket]);
// }

function useCurrentRoom(dispatchMessages, socket, currentRoom) {
    useEffect(() => {
        dispatchMessages({ type: 'CLEAR_MESSAGES', data: [] });
        dispatchMessages({
            type: 'ALL_MESSAGES',
            data: [
                {
                    class_name: 'ContractClause',
                    payload: {
                        tender_id: 1,
                        document_id: 1,
                        before_clause: 'TextBefore',
                        clause: 'NewText',
                        comment: 'Wow',
                    },
                },
                {
                    class_name: 'ContractClause',
                    payload: {
                        tender_id: 1,
                        document_id: 1,
                        before_clause: 'TextBefore',
                        clause: 'NewText',
                        comment: 'Wow',
                    },
                },
                {
                    class_name: 'ContractClause',
                    payload: {
                        tender_id: 1,
                        document_id: 1,
                        before_clause: 'TextBefore',
                        clause: 'NewText',
                        comment: 'Wow',
                    },
                },
            ],
        });
    }, [currentRoom, dispatchMessages, socket]);
}

// async function getPossibleRooms() {
//     const response = await axios.get('./api/get-possible-rooms');
//     return response['data'];
// }

async function getPossibleRooms() {
    // const response = await axios.get('./api/get-possible-rooms');
    const response = [
        {
            id: 1,
            description: 'wow',
            tender_number: 123,
        },
        {
            id: 2,
            description: 'wow',
            tender_number: 123,
        },
        {
            id: 3,
            description: 'wow',
            tender_number: 123,
        },
    ];

    return response['data'];
}

// // SocketIO state management
// export function useSocketIOSubscription(dispatchMessages, socket) {
//     useEffect(() => {
//         socket.connect();
//         socket.on('message-from-server', (payload) => {
//             dispatchMessages({
//                 type: 'NEW_MESSAGE',
//                 data: payload['db_message'],
//             });
//         });
//         return function cleanup() {
//             socket.off('message-from-server');
//             socket.disconnect();
//         };
//     }, [dispatchMessages, socket]);
// }

export function useSocketIOSubscription(dispatchMessages, socket) {
    useEffect(() => {
        socket.connect();
        // socket.on('message-from-server', (payload) => {
        //     dispatchMessages({
        //         type: 'NEW_MESSAGE',
        //         data: payload['db_message'],
        //     });
        // });
        dispatchMessages({
            type: 'NEW_MESSAGE',
            data: {
                class_name: 'ContractClause',
                payload: {
                    tender_id: 1,
                    document_id: 1,
                    before_clause: 'TextBefore',
                    clause: 'NewText',
                    comment: 'Wow',
                },
            },
        });

        return function cleanup() {
            // socket.off('message-from-server');
            socket.disconnect();
        };
    }, [dispatchMessages, socket]);
}
