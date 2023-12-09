import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';
import { success } from '@mui/material/colors';


function RedactionChangedWholeMessage() {
    const data = { 'idDocument':'55951981', 'fileName':'приложение', 'proposedLink':'#', 'customerLink':'#', 'comment':'я опечатался' }
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <Typography>Здравствуйте! Заказчик откорректировал вашу редакцию по договору: №{data.idDocument}</Typography>
                <Typography>{data.fileName}</Typography>
                <Typography style={{color:'red'}}>предложенная редакция поставщика: <Link href={data.proposedLink}>ссылка на файл</Link></Typography>
                <Typography style={{color:'green'}}>редакция заказчика: <Link href={data.customerLink}>ссылка на файл</Link></Typography>
                <Typography>комментарий: {data.comment}</Typography>

            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' color='success'>Принять редакцию</Button>
                <Button size="small" variant='contained' color='error'>Отклонить редакцию</Button>
            </CardActions>
        </Card>

    );
}

export default RedactionChangedWholeMessage;