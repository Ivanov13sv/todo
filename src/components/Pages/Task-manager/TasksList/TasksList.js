import React from 'react';
import { List, Typography, Container } from '@material-ui/core';
import TaskListItem from './TaskListItem/TaskListItem';
import useStyles from '../../../../styles';
import TaskAddForm from './TaskAddForm/TaskAddForm'

const TasksList = ({
    posts,
    removePost,
    onToggleImportant,
    editTask,
    setValue,
    value,
    addPost,
    dragStartHandler,
    dragEndHandler,
    dragOverHandler,
    dropHandler
}) => {

    const sortCards = (a, b) => {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      };

    const { tasks, no__tasks } = useStyles();
    const itemsArray = posts.sort(sortCards).map(post => {
        return <TaskListItem
            setValue={setValue}
            editTask={editTask}
            onToggleImportant={onToggleImportant}
            important={post.important}
            removePost={removePost}
            key={post.id}
            text={post.text}
            post={post}
            dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler}
            dragOverHandler={dragOverHandler}
            dropHandler={dropHandler}
        />
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
                <Typography className={no__tasks} variant='body1' children={`No tasks =(`} align='center' />

            )}
            <Container maxWidth='xs'>
                <TaskAddForm value={value} setValue={setValue} addPost={addPost} editTask={editTask} />
            </Container>
        </>
    );
};

export default TasksList;