import React from 'react';
import { List } from '@material-ui/core';
import PostListItem from './Post-List-Item/PostListItem'

const PostList = ({ posts }) => {

    const itemsArray = posts.map(posts => {
        return <PostListItem key={posts.id} text={posts.text}  />
    })
    
    return (
        <List >
            {itemsArray}
        </List>
    );
};

export default PostList;