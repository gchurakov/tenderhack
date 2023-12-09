import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';

function ArbitraryItemForm() {
    const data = { 'documentId': '834954', 'item': 3, 'proposedEdition': 'отменить поставку 10 стульев', 'comment': 'мы не можем себе это позволить' }
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
            <CardActions>
                <Button size="small" variant='contained' color='success'>Принять редакцию</Button>
                <Button size="small" variant='contained' color='error'>Отклонить редакцию</Button>
                <Button size="small" variant='contained' color='warning'>корректировать</Button>
            </CardActions>

        </Card>

    );
}

export default ArbitraryItemForm;