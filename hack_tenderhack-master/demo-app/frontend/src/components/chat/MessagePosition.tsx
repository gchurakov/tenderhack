// MsgPos component
import React  from 'react';
import { FC, ReactNode}  from 'react';
import  {Badge}  from '@mui/material';

interface MsgPosProps {
    pos: string;
    time?: string;
    children?: ReactNode;
}

const MsgPos: FC<MsgPosProps> = (props) => {
    const  pos  = props.pos;
    const time = props.time;
    return (
        <div>
            {pos === '0' ?
                <div className='row p-0 m-0 w-100'>
                    <div className='col-9 p-0 m-0'>
{                        time === undefined ? props.children : <Badge sx= {{"  & .MuiBadge-badge  .MuiBadge-badge":  {fontSize: '1.2rem'} }}   badgeContent={time} anchorOrigin= {{vertical: 'bottom', horizontal: 'right'}} >{props.children}</Badge>
}                    </div>
                    <div className='col-3 p-0 m-0'></div>
                </div> :
                <div className='row p-0 m-0'>
                    <div className='col-3 p-0 m-0'></div>
                    <div className='col-9 p-0 m-0 w-100'>
                    {time === undefined ? props.children : <Badge sx= {{"  & .MuiBadge-badge  .MuiBadge-badge":  {fontSize: '1.2rem'} }}   badgeContent={time} anchorOrigin= {{vertical: 'bottom', horizontal: 'right'}} >{props.children}</Badge>}
                    </div>
                </div>}
        </div>
    );
}

export default MsgPos;