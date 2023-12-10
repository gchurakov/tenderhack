import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Button, Input } from '@mui/material';
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

interface ContractProtocol {
    numberField: string;
    validityPeriod: {
        startDate: Date | null;
        endDate: Date | null;
    };
    summ: string;
    avans: string;
    financeSource: string;
    ikz: string;
    place: string;
    subject: string;
}

interface SubsData {
    contractProjectFile: File | null;
    attachmentFile: File | null;
}

function CreateContractModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [contractProtocol, setContractProtocol] = useState < ContractProtocol > ({
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
    });

    const [subsData, setSubsData] = useState < SubsData > ({
        contractProjectFile: null,
        attachmentFile: null,
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const name = event.target.name;

        setSubsData({
            ...subsData,
            [name]: file,
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setContractProtocol({
            ...contractProtocol,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       
    };

    const handleDateChange = (date: Date | null, field: string) => {
        setContractProtocol({
            ...contractProtocol,
            validityPeriod: {
                ...contractProtocol.validityPeriod,
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
                            value={contractProtocol.numberField}
                            onChange={handleChange}
                        />

                        <Typography>Период действия</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    size='small'
                                    label='От'
                                    name='validityPeriodStart'
                                    value={contractProtocol.validityPeriod.startDate}
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
                                    value={contractProtocol.validityPeriod.endDate}
                                    onChange={(date:Date) =>
                                        handleDateChange(date, 'endDate')
                                    }
                                    renderInput={(params:TextFieldProps) => (
                                        <TextField
                                            {...params}
                                            variant='outlined'
                                        />
                                    )}
                                />
                            </DemoContainer>
                        </LocalizationProvider>

                        {/* Rest of the form fields... */}

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