import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';
import { success } from '@mui/material/colors';


function MsgPos(props) {
    const pos = props.pos //left -- 0; right -- 1
    return (
        <div>
            {pos === '0' ?
                <div className='row p-0 m-0'><div className='col-9 p-0 m-0'>
                    {props.children}
                </div>

                    <div className='col-3 p-0 m-0'>
                    </div>
                </div> :
                <div className='row p-0 m-0'><div className='col-3 p-0 m-0'>

                </div>

                    <div className='col-9 p-0 m-0'>
                        {props.children}
                    </div>
                </div>}
        </div>

    );
}

export default MsgPos;