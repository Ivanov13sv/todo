import React from 'react';
import { ListItem, ListItemText, IconButton } from '@material-ui/core';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import useStyles from '../../../../../styles';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';





const PostListItemCopy = ({ text, removePost, post, onToggleImportant, important, findItem, editTask,setValue }) => {

    let { icon__star, post__item } = useStyles();

    if (important) {
        icon__star += ` important`;
        post__item += ` important`;
    }

    // const edit = () =>{
    //     setValue(text);
    //     editTask(post)
    // }

    return (
        <ListItem className={post__item} >
            <ListItemText primary={text} /> 
            <IconButton onClick={() => onToggleImportant(post.id)} className={icon__star} >
                <StarBorderRoundedIcon />
            </IconButton>
            <IconButton onClick={() => removePost(post)}>
                <DeleteForeverRoundedIcon />
            </IconButton>
            <IconButton  onClick={() => editTask(post)}>
                <CreateRoundedIcon  />
            </IconButton>
        </ListItem>
    );
};

export default PostListItemCopy;