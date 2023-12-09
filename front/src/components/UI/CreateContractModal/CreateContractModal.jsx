import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Button, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    padding: '20px',
    overflowY: 'auto',
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function CreateContractModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formData, setFormData] = useState({
        numberField: '',
        validityPeriodStart: null,
        validityPeriodEnd: null,
        contractName: '',
        summ: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Создать договор</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box style={{}} sx={style}>
                    <Typography
                        style={{ marginBottom: '8px' }}
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        Создать договор
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Typography>Номер</Typography>
                        <TextField
                            size='small'
                            fullWidth
                            variant='outlined'
                            name='numberField'
                            value={formData.numberField}
                            onChange={handleChange}
                        />

                        <Typography>Период действия</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    size='small'
                                    label='От'
                                    value={formData.validityPeriodStart}
                                    onChange={handleChange}
                                />
                                <DatePicker
                                    label='До'
                                    size='small'
                                    value={formData.validityPeriodEnd}
                                    onChange={handleChange}
                                />
                            </DemoContainer>
                        </LocalizationProvider>

                        <Typography>Сумма</Typography>
                        <TextField
                            size='small'
                            fullWidth
                            type='number'
                            step='0.000001'
                            variant='outlined'
                            name='summ'
                            value={formData.summ}
                            onChange={handleChange}
                        />

                        <Typography>Аванс</Typography>
                        <TextField
                            size='small'
                            fullWidth
                            type='number'
                            step='0.000001'
                            variant='outlined'
                            name='summ'
                            value={formData.summ}
                            onChange={handleChange}
                        />

                        <Typography>Предмет договора</Typography>
                        <TextField
                            size='small'
                            fullWidth
                            variant='outlined'
                            name='Subject'
                            value={formData.contractName}
                            onChange={handleChange}
                        />

                        <Typography>Место заключения</Typography>
                        <TextField
                            size='small'
                            fullWidth
                            variant='outlined'
                            name='Subject'
                            value={formData.contractName}
                            onChange={handleChange}
                        />

                        <Typography>
                            Идентификационный код закупки (ИКЗ)
                        </Typography>
                        <TextField
                            size='small'
                            fullWidth
                            variant='outlined'
                            name='Subject'
                            value={formData.contractName}
                            onChange={handleChange}
                        />

                        <Typography>Источник финансирования</Typography>
                        <TextField
                            size='small'
                            fullWidth
                            variant='outlined'
                            name='Subject'
                            value={formData.contractName}
                            onChange={handleChange}
                        />

                        <Button
                            style={{ marginTop: '8px', marginRight: '8px' }}
                            variant='contained'
                            color='primary'
                            type='submit'
                        >
                            Отмена
                        </Button>

                        <Button
                            style={{ marginTop: '8px', marginRight: '8px' }}
                            variant='contained'
                            color='primary'
                            type='submit'
                        >
                            Назад
                        </Button>

                        <Button
                            style={{ marginTop: '8px', marginRight: '8px' }}
                            variant='contained'
                            color='primary'
                            type='submit'
                        >
                            Далее
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default CreateContractModal;
