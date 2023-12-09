import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';

function ArbitraryItemMessage() {
    const data = { 'documentId':'834954', 'item':1, 'proposedEdition':'поставить 80 кальянов и 10 чарон ьейьи', 'comment':'бля' }
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