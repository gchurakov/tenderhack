import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';

function EditWholeDocumentMessage(props) {
    const data = props.data
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <br />
                <Typography variant="h6">Заявка на изменение договора целиком</Typography>
                <br />
                <Typography>Документ: Договор поставки <b>№{data.documentId}</b></Typography>
                <Typography><Link href={data.fileLink}>Ссылка на файл</Link></Typography>
                <Typography>Комментарий: "{data.comment}"</Typography>
            </CardContent>
        </Card>

    );
}

export default EditWholeDocumentMessage;