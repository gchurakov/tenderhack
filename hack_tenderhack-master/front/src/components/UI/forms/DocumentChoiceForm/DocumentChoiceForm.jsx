import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';

function DocumentChoiceForm(props) {
    const data = props.data
    const specification= { 
        _comment: 'навигация по приложениям к договору',
        'protocolId': '', 
        'link': '', 
        'documents': 'list[dict{name:str, link:str}]',
        '_method':'get'
        }
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <br />
                <Typography>Здравствуйте! Выберите пожалуйста документ, к которому хотите создать протокол разногласий</Typography>
                <br />
                
                
                <br/>
                <div className="container">
                    {data.documents.map((doc) => { return <div className="row mt-2"><Button size="small" variant='outlined'>{doc.name}</Button></div> })}
                    <div className="row mt-2"><Button size="small" variant='contained'>назад</Button></div>
                </div>
            </CardContent>
        </Card>

    );
}

export default DocumentChoiceForm;