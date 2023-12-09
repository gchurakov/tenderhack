import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button, Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { success } from '@mui/material/colors';


function FinalButton() {
    
    return (

        <div className="w-100 row" variant="outlined">
            <div className="col-3"></div>
            <Button className="col-6" size="medium" variant='contained' color='error'>скачать итоговую версию контракта</Button>
            <div className="col-3"></div>
        </div>

    );
}

export default FinalButton;