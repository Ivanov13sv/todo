import React from 'react';
import { List, Typography } from '@material-ui/core';
import TaskListItem from './TaskListItem/TaskListItem';
import useStyles from '../../../../styles';

const TasksList = ({ posts, removePost, onToggleImportant, findItem, editItem }) => {

    const { tasks, no__tasks } = useStyles();
    const itemsArray = posts.map(post => {
        return <TaskListItem editItem={editItem} findItem={findItem} onToggleImportant={onToggleImportant} important={post.important} removePost={removePost} key={post.id} text={post.text} post={post} />
    })

    return (

        // <List >
        //     {itemsArray}
        // </List>
        <>
            {posts.length ? (
                < List >
                    <Typography className={tasks} align='right' variant='body1' children={
                        // `${itemsArray.length} tasks / 0 important`
                        `${itemsArray.length === 1
                            ? `1 task / 0 important`
                            : `${itemsArray.length} tasks / 0 important`
                        }`
                    } />
                    {itemsArray}
                </List>
            ) : (
                <Typography className={no__tasks} variant='body1' children={`No tasks`} align='center' />
            )}
        </>
    );
};

export default TasksList;