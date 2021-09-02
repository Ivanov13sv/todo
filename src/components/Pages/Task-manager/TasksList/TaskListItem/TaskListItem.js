import React from 'react';
import { ListItem, ListItemText, IconButton, Tooltip, Zoom } from '@material-ui/core';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import useStyles from '../../../../../styles';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';


const PostListItem = ({
    removePost,
    post,
    onToggleImportant,
    important,
    editTask,
    dragNdropFns,
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
                onDragStart={(e) => dragNdropFns.dragStartHandler(e, post)}
                onDragLeave={(e) => dragNdropFns.dragEndHandler(e)}
                onDragEnd={(e) => dragNdropFns.dragEndHandler(e)}
                onDragOver={(e) => dragNdropFns.dragOverHandler(e)}
                onDrop={(e) => dragNdropFns.dropHandler(e, post)} >

                <ListItem
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

export default PostListItem;
