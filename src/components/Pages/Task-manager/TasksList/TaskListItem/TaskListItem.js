import React from 'react';
import { ListItem, ListItemText, IconButton, Tooltip, Zoom } from '@material-ui/core';
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
    dropHandler,
}) => {

    let { icon__star, post__item } = useStyles();

    if (important) {
        icon__star += ` important`;
        post__item += ` important`;
    }

    return (
        <Tooltip
            disableTouchListener={true}
            TransitionComponent={Zoom}
            title="You can drag and drop me" placement="left">
            <div
                draggable
                onDragStart={(e) => dragStartHandler(e, post)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, post)} >

                <ListItem
                    // button 
                    className={post__item}

                >
                    <ListItemText primary={post.text} />
                    <IconButton onClick={() => onToggleImportant(post.id)} className={icon__star} >
                        <StarBorderRoundedIcon />
                    </IconButton>
                    <IconButton onClick={() => removePost(post)}>
                        <DeleteForeverRoundedIcon />
                    </IconButton>
                    <IconButton onClick={() => editTask(post)}>
                        <CreateRoundedIcon />
                    </IconButton>
                </ListItem>
            </div>
        </Tooltip>
    );
};

export default PostListItemCopy;
