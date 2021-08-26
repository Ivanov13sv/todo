import { TextField } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles';
import PostStatusFilter from '../Post-Status-Filter/PostStatusFilter';

const SearchPanel = () => {

    const {search__panel} = useStyles();

    return (
        <div className={search__panel} >
            <TextField fullWidth id="standard-basic" label="Поиск по записям" type="search" variant="outlined" size='small' />
            <PostStatusFilter />
        </div>
    );
};

export default SearchPanel;
