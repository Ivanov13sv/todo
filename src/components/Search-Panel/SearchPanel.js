import { TextField } from '@material-ui/core';
import React,{useState} from 'react';
import useStyles from '../../styles';
import PostStatusFilter from '../Post-Status-Filter/PostStatusFilter';

const SearchPanel = () => {

    const {search__panel} = useStyles();
    const [searchQuery, setSearchQuery] = useState('');


    return (
        <div className={search__panel} >
            <TextField value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoComplete='off'
                fullWidth
                id="standard-basic"
                label="Поиск по записям"
                type="search"
                variant="outlined"
                size='small'
                 />
            <PostStatusFilter />
        </div>
    );
};


export default SearchPanel;
