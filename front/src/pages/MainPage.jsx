import React, { useEffect, useRef, useState } from 'react';
import SearchBar from "../components/SearchBar"
import Button from '@mui/material/Button';
import SideBar from '../components/SideBar';

function MainPage(props) {

    const [tenders, settenders] = useState([
        {
            'name': 'tender1',
            'id': '1323141234',
            'customer': 'вшэ',
            'provider': 'ашот'
        },
        {
            'name': 'tender1',
            'id': '1323141234',
            'customer': 'вшэ',
            'provider': 'ашот'
        },
        {
            'name': 'tender1',
            'id': '1323141234',
            'customer': 'вшэ',
            'provider': 'ашот'
        },
        {
            'name': 'tender1',
            'id': '1323141234',
            'customer': 'вшэ',
            'provider': 'ашот'
        },
    ])
    return (

        <div>
        <SideBar className="w-100" tenders={tenders}>
        <h1>hello</h1>
        </SideBar>
        </div>
    );
}

export default MainPage;
