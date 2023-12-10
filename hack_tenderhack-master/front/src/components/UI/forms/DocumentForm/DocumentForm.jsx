import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';

function DocumentForm(props) {
    // const data = { 'protocolId': '22869420', 'link': '#', 'documents': [{ 'name': 'приложение 1', 'link': '#' }, { 'name': 'приложение 2', 'link': '#' }] }
    const data = props.data
    const specification = {
        '_comment':'вам отправлены документы заказчика, принять/отклонить',
        'documentId':'',
        'link':'',
        'documents':'list[dict{name:str, link:str}]',
        '_method': 'get'
    }
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <br />
                <Typography>Здравствуйте! заказчик отправил вам протокол контракта <Link href={data.link}>№{data.documentId}</Link></Typography>
                <br />
                <Typography>А так же: </Typography>
                <div className="container">{data.documents.map((doc) => { return <div className="row"><Link href={doc.link}>{doc.name}</Link></div> })}</div>
                <br/>
                <CardActions>
                    <Button size="small" variant='contained' color='success'>Принять изменения</Button>
                    <Button size="small" variant='contained' color='error'>Отклонить изменения</Button>
                </CardActions>
            </CardContent>
        </Card>

    );
}

export default DocumentForm;