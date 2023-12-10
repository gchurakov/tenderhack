import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, TextField } from '@mui/material';

interface CustomerEditedRedactionProps {
  data: {
    idDocument: string;
    item: string;
    proposedRedaction: string;
    customerRedaction: string;
    comment: string;
  };
}

function CustomerEditedRedaction(props: CustomerEditedRedactionProps) {
  const data = props.data;

  const specification = {
    _comment: 'заказчик откорректировал редакцию, поставщик не/соглашается',
    idDocument: '',
    item: '',
    proposedRedaction: '',
    customerRedaction: '',
    comment: '',
    _method: 'get',
  };

  return (
    <Card variant="outlined">
      <CardContent style={{ paddingBottom: '1em' }}>
        <Typography>Здравствуйте! Заказчик откорректировал вашу редакцию по договору: №{data.idDocument}</Typography>
        <Typography>Пункт договора: №{data.item}</Typography>
        <Typography style={{ color: 'red' }}>предложенная редакция поставщика: {data.proposedRedaction}</Typography>
        <Typography style={{ color: 'green' }}>редакция заказчика: {data.proposedRedaction}</Typography>
        <Typography>комментарий: {data.comment}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color='success'>
          Принять редакцию
        </Button>
        <Button size="small" variant="contained" color='error'>
          Отклонить редакцию
        </Button>
      </CardActions>
    </Card>
  );
}

export default CustomerEditedRedaction;