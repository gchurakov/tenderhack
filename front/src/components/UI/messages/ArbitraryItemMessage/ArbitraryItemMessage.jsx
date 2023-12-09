import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';

function ArbitraryItemMessage(props) {
    const data = props.data
    const specification = {
        '_comment': 'заявка на изменение пункта в договоре',
        'documentId': '', 
        'item': '', 
        'proposedEdition': '', 
        'comment': '' ,
        '_method':'post'
    }
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <br />
                <Typography variant="h6">Заявка на изменение пункта договора</Typography>
                <br />
                <Typography>Документ: Договор поставки <b>№{data.documentId}</b></Typography>
                <Typography>Пункт: {data.item}</Typography>
                <Typography>Предложенная редакция: "{data.proposedEdition}"</Typography>
                <Typography>Комментарий: "{data.comment}"</Typography>

            </CardContent>
        </Card>

    );
}

export default ArbitraryItemMessage;