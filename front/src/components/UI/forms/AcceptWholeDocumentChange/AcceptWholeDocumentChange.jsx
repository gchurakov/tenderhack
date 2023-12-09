import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';
import { success } from '@mui/material/colors';


function AcceptWholeDocumentChange(props) {
    // const data = { vendorName:'зао орки', 'documentId':'1235456', 'fileLink':'#', 'fileName':'file', 'comment':'посмотрите пж' }
    const data = props.data
    const specification = {
        _comment: 'поставщик изменил договор целиком и заказчик не/соглашается',
        vendorName: 'string',
        documentId: '', 
        fileLink: '',
        fileName: '',
        comment: '',
        _method: 'get'
    }
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <Typography>заявка на изменение договора целиком</Typography>
                <Typography variant='h6'>{data.vendorName}</Typography>
                <Typography><Link href={data.fileLink}>{data.fileName}</Link></Typography>
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

export default AcceptWholeDocumentChange;