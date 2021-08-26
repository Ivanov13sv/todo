import React from 'react';
import { List } from '@material-ui/core';
import PostListItem from './Post-List-Item/PostListItem'

const PostList = ({ posts, removePost }) => {

    const itemsArray = posts.map(post => {
        return <PostListItem removePost={removePost} key={post.id} text={post.text} post={post} />
    })

    return (
        <List >
            {itemsArray}
        </List>
    );
};

export default PostList;