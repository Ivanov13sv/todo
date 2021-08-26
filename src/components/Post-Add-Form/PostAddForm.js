import React, { useState } from 'react';
import { TextField, Button, Fab, Tooltip } from '@material-ui/core';
import useStyles from '../../styles';
import AddIcon from '@material-ui/icons/Add';


const PostAddForm = ({create }) => {

    const [post, setPost] = useState({
        text: ''
    });

    const addPosts = (e) => {
      e.preventDefault();  
      const newPost = {
          ...post, id: Date.now()
      }
      create(newPost)
      setPost({
          text: ''
      })
    };


    const { add__post__form } = useStyles();
    return (
        <form autoComplete='off' className={add__post__form}>
            <TextField onChange={(e) => setPost({...post,text: e.target.value})} value={post.text} fullWidth id="standard-basic" label="Add task" />
            <Tooltip title='Add'>
                <Fab onClick={(e) => addPosts(e)} style={{ marginTop: '15px' }} size='small' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
        </form>
    );
};

export default PostAddForm;