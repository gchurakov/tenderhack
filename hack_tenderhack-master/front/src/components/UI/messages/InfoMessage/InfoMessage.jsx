import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';

function InfoMessage(props) {
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                {props.children}
            </CardContent>
        </Card>

    );
}

export default InfoMessage;