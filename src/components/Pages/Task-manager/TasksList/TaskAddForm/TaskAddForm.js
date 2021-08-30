import React, { useState, useEffect } from 'react';
import { TextField, Button, Fab, Tooltip } from '@material-ui/core';
import useStyles from '../../../../../styles';
import AddIcon from '@material-ui/icons/Add';


const PostAddForm = ({ create, editTask, value, setValue }) => {

    // const [post, setPost] = useState({
    //     text: ''
    // });

    // const addPosts = (e) => {
    //     e.preventDefault();
    //     if (post.text) {
    //         const newPost = {
    //             ...post, id: Date.now()
    //         }
    //         create(newPost)
    //         setPost({
    //             text: ''
    //         })
    //     }
    // };
    const addPosts = (e) => {
        e.preventDefault();
        if (value) {
            const newPost = {
                id: Date.now(),
                text: value,
                isComplete: false
            }
            create(newPost)
            setValue('')
        }
    };


    const { add__post__form } = useStyles();
    return (
        // <form onSubmit={(e) => addPosts(e)} autoComplete='off' className={add__post__form}>
        //     <TextField onChange={(e) => setPost({ ...post, text: e.target.value })} value={post.text} fullWidth id="standard-basic" label="Add task" />
        //     <Tooltip title='Add'>
        //         <Fab type='submit' style={{ marginTop: '15px' }} size='small' color="primary" aria-label="add">
        //             {/* <Fab onClick={(e) => addPosts(e)} style={{ marginTop: '15px' }} size='small' color="primary" aria-label="add"> */}
        //             <AddIcon />
        //         </Fab>
        //     </Tooltip>
        // </form>
        <form onSubmit={(e) => addPosts(e)} autoComplete='off' className={add__post__form}>
            <TextField onChange={(e) => setValue(e.target.value)} value={value} fullWidth id="standard-basic" label="Add task" />
            <Tooltip title='Add'>
                <Fab type='submit' style={{ marginTop: '15px' }} size='small' color="primary" aria-label="add">
                    {/* <Fab onClick={(e) => addPosts(e)} style={{ marginTop: '15px' }} size='small' color="primary" aria-label="add"> */}
                    <AddIcon />
                </Fab>
            </Tooltip>
        </form>
    );
};

export default PostAddForm;