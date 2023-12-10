import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';

function CreateContractWithFiles() {
    const specification = {
        _comment:'поставщик изменил пункт, заказчик не/отказывается',
        'contract': 'blob',
        'aplication': 'blob', 
        _method: 'post'
    }
    const SubmitButton = (props) => (<button {...props} type='submit' />);
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <form className="container">
                    <Typography>проект контракта</Typography>
                    <div className="row mt-2"> <TextField required id="contract" type="file" /></div>
                    <Typography>приложения</Typography>
                    <div className="row mt-2"> <TextField required id="aplication" type="file" /></div>

                    <br />
                    <CardActions>
                        <Button size="small" variant='contained' color='error'>Отменить</Button>
                        <Button size="small" variant='contained' >Назад</Button>
                        <Button size="small" variant='contained' color='success'>Сохранить</Button>
                        <Button size="small" component={SubmitButton} variant='contained' color='success'>Отправить</Button>
                    </CardActions>
                </form>


            </CardContent>
        </Card>

    );
}

export default CreateContractWithFiles;