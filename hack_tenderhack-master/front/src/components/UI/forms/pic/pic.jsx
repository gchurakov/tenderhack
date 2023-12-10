import React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, Button } from '@mui/material';
import { TextField } from '@mui/material';

function Pic(props) {
    const SubmitButton = (props) => (<button {...props} type='submit' />);
    return (

        <Card variant="outlined">
            <CardContent style={{ paddingBottom: '1em' }}>
                {props.children}
            
            </CardContent>
            <CardActions>
                    <Button size="small" variant='contained' color='success'>далее</Button>
                    {props.prevDisabled?<div></div>:
                    <Button size="small" variant='contained'>назад</Button>}
                    <Button size="small" variant='contained' color='error'>отмена</Button>
                </CardActions>
        </Card>

    );
}

export default Pic;