import React, { useState } from 'react';
import { TextField, Button, Fab, Tooltip } from '@material-ui/core';
import useStyles from '../../styles';
import AddIcon from '@material-ui/icons/Add';


const PostAddForm = ({ addPosts }) => {

    const [text, setText] = useState('');

    const { add__post__form } = useStyles();
    return (
        <form className={add__post__form}>
            <TextField onChange={e => setText(e.target.value)} value={text} fullWidth id="standard-basic" label="Add task" />
            <Tooltip  title='Add'>
                <Fab onClick={() => addPosts()} style={{ marginTop: '15px' }} size='small' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
        </form>
    );
};

export default PostAddForm;