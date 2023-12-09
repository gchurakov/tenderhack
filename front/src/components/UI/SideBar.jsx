import React, { useEffect, useRef, useState } from 'react';
// import SearchBar from '../components/SearchBar';
import Button from '@mui/material/Button';

function SideBar(props) {
    return (
        <div className='row'>
            <div
                className='col-4 container'
                style={{
                    paddingLeft: 50,
                    paddingRight: 0,
                    backgroundColor: 'red',
                    height: '100vh',
                }}
            >
                <div
                    className='h-100 w-100'
                    style={{ backgroundColor: 'white' }}
                >
                    <br />
                    <div className='row'>
                        {props.tenders.map((tender, i) => {
                            return (
                                <Button key={i} className='mt-2' color='error'>
                                    Tender {tender.id}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='col-8'>{props.children}</div>
        </div>
    );
}

export default SideBar;
