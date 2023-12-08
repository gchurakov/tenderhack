import React, { useEffect, useRef, useState } from 'react';
import SearchBar from "../components/SearchBar"
import Button from '@mui/material/Button';


function SideBar(props) {

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

        <div className="row">
            <div className="col-4 container" style={{ paddingLeft: 50, paddingRight:0, backgroundColor: 'red', height:'100vh'}}>
                <div className='h-100 w-100' style={{ backgroundColor: 'white' }}>
                    <div className="row" >
                        <SearchBar />
                    </div>
                    <br />
                    <div className="row">
                        {props.tenders.map((tender, ind) => {
                            return <Button className="mt-2" color="error">Tender {tender.id}</Button>
                        })}
                    </div>
                </div>
            </div>
            <div className="col-8">
                {props.children}
            </div>
        </div>
    );
}

export default SideBar;
