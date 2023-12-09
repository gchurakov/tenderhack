import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';

function ArbitraryItemEdit() {
    const data = { 'protocolId': '22869420', 'link': '#', 'documents': [{ 'name': 'приложение 1', 'link': '#' }, { 'name': 'приложение 2', 'link': '#' }] }
    const SubmitButton = (props) => (<button {...props} type='submit' />);
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <br />
                <Typography>Заявка на изменение пункта договора</Typography>
                <br />
                <form className="container">

                    <div className="row"> <TextField required id="standard-basic" label="Введите номер пункта договора" variant="standard" /></div>
                    <div className="row"> <TextField required id="standard-basic" label="Введите вашу редакцию пункта договора" variant="standard" /></div>
                    <div className="row"> <TextField id="standard-basic" label="Введите комментарий" variant="standard" /></div>
                    <br />
                    <CardActions>
                        <Button size="small" component={SubmitButton} variant='contained' color='success'>Отправить</Button>
                        <Button size="small" variant='contained' color='error'>Отменить</Button>
                    </CardActions>
                </form>


            </CardContent>
        </Card>

    );
}

export default ArbitraryItemEdit;