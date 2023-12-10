import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';
import { success } from '@mui/material/colors';


function CustomerEditedRedaction(props) {
    // const data = { 'idDocument':'55951981', 'item':'10', 'proposedRedaction':'пермь, бульвар гагарина 35', 'customerRedaction':'Пермский край, г. Пермь, бульвар гагарина 35', 'comment':'я опечатался' }
    const data = props.data
    const specification = {
        _comment:'заказчик откорректировал редакцию, поставщик не/соглашается',
        'idDocument':'', 
        'item':'', 
        'proposedRedaction':'', 
        'customerRedaction':'', 
        'comment':'',
        _method:'get'
    }
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <Typography>Здравствуйте! Заказчик откорректировал вашу редакцию по договору: №{data.idDocument}</Typography>
                <Typography>Пункт договора: №{data.item}</Typography>
                <Typography style={{color:'red'}}>предложенная редакция поставщика: {data.proposedRedaction}</Typography>
                <Typography style={{color:'green'}}>редакция заказчика: {data.proposedRedaction}</Typography>
                <Typography>комментарий: {data.comment}</Typography>

            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' color='success'>Принять редакцию</Button>
                <Button size="small" variant='contained' color='error'>Отклонить редакцию</Button>
            </CardActions>
        </Card>

    );
}

export default CustomerEditedRedaction;