import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';

function SuccessMessage(props) {
    return (

        <Card variant="outlined" style={{borderColor: "green"}}>
            <CardContent style={{ paddingBottom: '1em' }}>
                {props.children}
            </CardContent>
        </Card>

    );
}

export default SuccessMessage;