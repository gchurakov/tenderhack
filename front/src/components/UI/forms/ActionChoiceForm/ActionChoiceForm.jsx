import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';

function ActionChoiceForm() {
    const data = { 'protocolId': '22869420', 'link': '#', 'documents': [{ 'name': 'приложение 1', 'link': '#' }, { 'name': 'приложение 2', 'link': '#' }] }
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                <br />
                <Typography>Выберите пожалуйста действие, которое хотите совершить.</Typography>
                <br />
                
                
                <br/>
                <div className="container">
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить произвольный пункт договора</Button></div>
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить номер</Button></div>
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить период действия</Button></div>
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить предмет контракта</Button></div>
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить место заключения</Button></div>
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить ИКЗ</Button></div>
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить источник финансирования</Button></div>
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить сумму</Button></div>
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить аванс</Button></div>
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить приложение к договору</Button></div>
                    <div className="row mt-2"><Button size="small" variant='outlined'>изменить документ целиком</Button></div>
                    <div className="row mt-2"><Button size="small" variant='contained'>назад</Button></div>
                </div>
            </CardContent>
        </Card>

    );
}

export default ActionChoiceForm;