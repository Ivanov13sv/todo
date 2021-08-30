import React from 'react';
import { List, Typography, Container } from '@material-ui/core';
import TaskListItem from './TaskListItem/TaskListItem';
import useStyles from '../../../../styles';
import TaskAddForm from './TaskAddForm/TaskAddForm'

const TasksList = ({ posts, removePost, onToggleImportant, findItem, editTask, setValue, value, create  }) => {

    const { tasks, no__tasks } = useStyles();
    const itemsArray = posts.map(post => {
        return <TaskListItem setValue={setValue} editTask={editTask} findItem={findItem} onToggleImportant={onToggleImportant} important={post.important} removePost={removePost} key={post.id} text={post.text} post={post} />
    })

    return (
        <>
            {posts.length ? (
                < List >
                    <Typography className={tasks} align='right' variant='body1' children={
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
            <Container maxWidth='xs'>
                <TaskAddForm value={value} setValue={setValue} create={create} editTask={editTask} />
            </Container>
        </>
    );
};

export default TasksList;