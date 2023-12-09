import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField, Badge } from '@mui/material';
import { success } from '@mui/material/colors';


function MsgPos(props) {
    const pos = props.pos //left -- 0; right -- 1
    const time = props.time //time in string
    return (
        
        <div >
            {pos === '0' ?
                <div className='row p-0 m-0 w-100'><div className='col-9 p-0 m-0'>
                    {time===undefined?props.children:<Badge sx={{ "& .MuiBadge-badge": { fontSize: '1.2rem' } }} badgeContent={time} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>{props.children}</Badge>}
                    
                </div>

                    <div className='col-3 p-0 m-0'>
                    </div>
                </div> :
                <div className='row p-0 m-0'><div className='col-3 p-0 m-0'>

                </div>

                    <div className='col-9 p-0 m-0 w-100'>
                    {time===undefined?props.children:<Badge sx={{ "& .MuiBadge-badge": { fontSize: '1.2rem' } }} badgeContent={time} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>{props.children}</Badge>}
                    </div>
                </div>}
        </div>

    );
}

export default MsgPos;