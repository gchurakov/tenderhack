import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';
import { success } from '@mui/material/colors';


function CustomerMadeChanges() {
    const data = { 'proposedRedaction':'пермь, бульвар гагарина 35', 'customerRedaction':'Пермский край, г. Пермь, бульвар гагарина 35', 'comment':'я опечатался' }
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <Typography>Здравствуйте! Заказчик внес изменения</Typography>
                <Typography style={{color:'red'}}>предложенная редакция поставщика: {data.proposedRedaction}</Typography>
                <Typography style={{color:'green'}}>редакция заказчика: {data.proposedRedaction}</Typography>
                <Typography>комментарий: {data.comment}</Typography>

            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' color='success'>Принять редакцию</Button>
                <Button size="small" variant='contained' color='error'>Отклонить редакцию</Button>
                <Button size="small" variant='contained' color='warning'>корректировать</Button>
            </CardActions>
        </Card>

    );
}

export default CustomerMadeChanges;