import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    TextField,
} from '@mui/material';

interface EditDynamicFieldFormProps {
    data: {
        field: string;
    };
}

const EditDynamicFieldForm: React.FC<EditDynamicFieldFormProps> = (props) => {
    const [red, sedRed] = useState<string>('');
    const [comment, setComment] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Field 1:', red);
        console.log('Field 2:', comment);
    };

    const SubmitButton: React.FC<
        React.ButtonHTMLAttributes<HTMLButtonElement>
    > = (props) => <button {...props} type='submit' />;

    const specification = {
        _comment: 'изменение произвольного пункта',
        redaction: '',
        comment: '',
        _method: 'post',

        field: '',
    };
    return (
        <Card variant='outlined'>
            <CardContent style={{ paddingBottom: '1em' }}>
                <br />
                <Typography variant='h6'>
                    Заявка на изменение поля "props.data.field"
                </Typography>
                <br />
                <form className='container' onSubmit={handleSubmit}>
                    <div className='row'>
                        <TextField
                            required
                            id='redaction'
                            label='Введите вашу редакцию'
                            variant='standard'
                            onChange={(e) => sedRed(e.target.value)}
                        />
                    </div>
                    <div className='row'>
                        <TextField
                            id='coment'
                            label='Введите комментарий'
                            variant='standard'
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <br />
                    <CardActions>
                        <Button
                            size='small'
                            component={SubmitButton}
                            variant='contained'
                            color='success'
                        >
                            Отправить
                        </Button>
                        <Button size='small' variant='contained' color='error'>
                            Отменить
                        </Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    );
};

export default EditDynamicFieldForm;
