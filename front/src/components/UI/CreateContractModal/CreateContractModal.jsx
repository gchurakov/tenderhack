import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Button, Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Input from '@mui/material/Input';

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
        validityPeriod: {
            startDate: null,
            endDate: null,
        },
        summ: '',
        avans: '',
        financeSource: '',
        ikz: '',
        place: '',
        subject: '',
        contractProjectFile: null,
        attachmentFile: null,
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const name = event.target.name;
        setFormData({
            ...formData,
            [name]: file,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleDateChange = (date, field) => {
        setFormData({
            ...formData,
            validityPeriod: {
                ...formData.validityPeriod,
                [field]: date,
            },
        });
    };

    return (
        <div>
            <div className='w-100 row' variant='outlined'>
                <div className='col-3'></div>
                <Button
                    className='col-6'
                    size='medium'
                    variant='contained'
                    color='error'
                    onClick={handleOpen}
                >
                    создать договор
                </Button>
                <div className='col-3'></div>
            </div>
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
                                    name='validityPeriodStart'
                                    // value={formData.validityPeriodStart}
                                    // onChange={handleChange}

                                    value={formData.validityPeriod.startDate}
                                    onChange={(date) =>
                                        handleDateChange(date, 'startDate')
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant='outlined'
                                        />
                                    )}
                                />
                                <DatePicker
                                    label='До'
                                    size='small'
                                    name='validityPeriodEnd'
                                    // value={formData.validityPeriodEnd}
                                    // onChange={handleChange}

                                    value={formData.validityPeriod.endDate}
                                    onChange={(date) =>
                                        handleDateChange(date, 'endDate')
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant='outlined'
                                        />
                                    )}
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
                            name='avans'
                            value={formData.avans}
                            onChange={handleChange}
                        />

                        <Typography>Предмет договора</Typography>
                        <TextField
                            size='small'
                            fullWidth
                            variant='outlined'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                        />

                        <Typography>Место заключения</Typography>
                        <TextField
                            size='small'
                            fullWidth
                            variant='outlined'
                            name='place'
                            value={formData.place}
                            onChange={handleChange}
                        />

                        <Typography>
                            Идентификационный код закупки (ИКЗ)
                        </Typography>
                        <TextField
                            size='small'
                            fullWidth
                            variant='outlined'
                            name='ikz'
                            value={formData.ikz}
                            onChange={handleChange}
                        />

                        <Typography>Источник финансирования</Typography>
                        <TextField
                            size='small'
                            fullWidth
                            variant='outlined'
                            name='financeSource'
                            value={formData.financeSource}
                            onChange={handleChange}
                        />

                        <div>
                            <Typography>Проект контракта</Typography>
                            <Input
                                type='file'
                                name='contractProjectFile'
                                onChange={handleFileChange}
                            />

                            <Typography>Приложения</Typography>
                            <Input
                                type='file'
                                name='attachmentFile'
                                onChange={handleFileChange}
                            />
                        </div>

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
