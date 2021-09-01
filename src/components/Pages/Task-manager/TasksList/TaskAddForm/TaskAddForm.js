import React, { useState } from 'react'
import { TextField, Fab, Tooltip, Zoom } from '@material-ui/core';
import useStyles from '../../../../../styles';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';




const PostAddForm = ({ addPost, value, setValue, errorMessage, ...props }) => {
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled"  {...props}></MuiAlert>;
    }




    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        setOpen(true);
        addPost(e)
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const { add__post__form, root } = useStyles();
    return (

        <form
            onSubmit={(e) => handleClick(e)}
            autoComplete='off'
            className={add__post__form}
        >

            <TextField
                onChange={(e) => setValue(e.target.value)}
                value={value}
                fullWidth
                id="standard-basic"
                label="Add task"
                helperText={value.length ? '' : errorMessage}
                className={root}

            />
            <Tooltip disableTouchListener arrow TransitionComponent={Zoom} title='Add'>
                <Fab type='submit' style={{ marginTop: '15px' }} size='small' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Snackbar TransitionComponent={Zoom} open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Success!
                </Alert>
            </Snackbar>
        </form>
    );
};

export default PostAddForm;