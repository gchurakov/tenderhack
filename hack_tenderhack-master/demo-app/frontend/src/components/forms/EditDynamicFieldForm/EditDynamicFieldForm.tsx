import React from 'react';
import  {Card, CardContent, CardActions, Typography, Button, TextField}  from '@mui/material';

interface EditDynamicFieldFormProps {
    data: {
        field: string;
    }
}

const EditDynamicFieldForm: React.FC<EditDynamicFieldFormProps> = (props) => {
    const SubmitButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (<button {...props} type='submit' />);
    const specification = {
        '_comment': 'изменение произвольного пункта',
        'redaction': '',
        'comment':'',
        '_method':'post',
        
        'field':'' // именно строка, не число
    }
    return (
        <Card variant="outlined">
            <CardContent style= {{paddingBottom: '1em'}} >
                <br />
                <Typography variant="h6">Заявка на изменение поля "{props.data.field}"</Typography>
                <br />
                <form className="container">
                    <div className="row"> <TextField required id="redaction" label="Введите вашу редакцию" variant="standard" /></div>
                    <div className="row"> <TextField id="coment" label="Введите комментарий" variant="standard" /></div>
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

export default EditDynamicFieldForm;