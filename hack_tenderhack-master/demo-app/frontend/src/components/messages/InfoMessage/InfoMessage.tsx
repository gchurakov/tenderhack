import React, { ReactNode } from 'react';
import { Card, CardContent, CardActions, Typography, Link, Button, TextField } from '@mui/material';

interface InfoMessageProps {
    children: ReactNode;
}

function InfoMessage(props: InfoMessageProps) {
    return (
        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                {props.children}
            </CardContent>
        </Card>
    );
}

export default InfoMessage;