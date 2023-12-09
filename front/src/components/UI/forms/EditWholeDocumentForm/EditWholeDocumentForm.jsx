import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';

function EditWholeDocumentForm() {
    const data = { 'documentId': '834954', 'item': 3, 'proposedEdition': 'отменить поставку 10 стульев', 'comment': 'мы не можем себе это позволить' }
    const SubmitButton = (props) => (<button {...props} type='submit' />);
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <br />
                <Typography>Заявка на изменение договора/приложения целиком</Typography>
                <br />
                <form className="container">

                    <div className="row mt-2"> <TextField required id="standard-basic" label="Введите номер пункта договора" variant="standard" /></div>
                    <div className="row mt-2"> <TextField required id="file" type="file" /></div>
                    <div className="row mt-2"> <TextField id="standard-basic" label="Введите комментарий" variant="standard" /></div>
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

export default EditWholeDocumentForm;