
import React from 'react';
import TenderItem from '../TenderItem/TenderItem';
import { TextField } from '@mui/material';
import {InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Searchbar({ tenders, onTenderSelected }) {
    return (
        <div style={{width:'100%'}}>
        
        <TextField fullWidth  InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }} id="search" label="найти тендер" variant="standard" />
        </div>
    );
}

export default Searchbar;
