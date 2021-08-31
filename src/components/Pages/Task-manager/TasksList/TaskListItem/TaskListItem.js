import React from 'react';
import { ListItem, ListItemText, IconButton } from '@material-ui/core';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import useStyles from '../../../../../styles';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';


const PostListItemCopy = ({
    removePost, 
    post, 
    onToggleImportant, 
    important, 
    editTask,
    dragStartHandler,
    dragEndHandler,
    dragOverHandler,
    dropHandler
 }) => {

    let { icon__star, post__item } = useStyles();

    if (important) {
        icon__star += ` important`;
        post__item += ` important`;
    }

    return (
        <ListItem
            // button 
            className={post__item}
            draggable
            onDragStart={(e) => dragStartHandler(e, post)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, post)}
            >
                <ListItemText primary={post.text} /> 
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
