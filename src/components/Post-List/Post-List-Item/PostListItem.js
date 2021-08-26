import React from 'react';
import { ListItem, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from '../../../styles';




const PostListItemCopy = ({ text, child }) => {

    const {icon__heart, post__item} = useStyles();

    

    return (
        <ListItem className={post__item} >
            <ListItemText primary={text} />
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <DeleteIcon />
            </IconButton>
            <IconButton className={icon__heart}>
                <FavoriteIcon  color='secondary' />
            </IconButton>
        </ListItem>
    );
};

export default PostListItemCopy;
