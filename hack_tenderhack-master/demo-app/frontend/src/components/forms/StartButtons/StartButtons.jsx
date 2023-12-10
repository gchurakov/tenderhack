import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button, Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { success } from '@mui/material/colors';


function StartButtons() {
    
    return (

        <div className="w-100 row" variant="outlined">
            <div className="col-1"></div>
            <Button className="col-4" size="medium" variant='contained' color='error'>новая заявка</Button>
            <div className="col-2"></div>
            <Button className="col-4" size="medium" variant='contained' color='error'>протокол разногласий</Button>
            <div className="col-1"></div>
        </div>

    );
}

export default StartButtons;