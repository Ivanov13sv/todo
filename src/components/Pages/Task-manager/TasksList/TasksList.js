import React from 'react';
import { List, Typography, Container } from '@material-ui/core';
import TaskListItem from './TaskListItem/TaskListItem';
import useStyles from '../../../../styles';
import TaskAddForm from './TaskAddForm/TaskAddForm'


const TasksList = ({ ...props }) => {

    const {
        setValue,
        editTask,
        onToggleImportant,
        removePost,
        dragStartHandler,
        dragEndHandler,
        dragOverHandler,
        dropHandler,
        posts,
        errorMessage,
        value,
        addPost,
        snackbars
    } = props

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

    const important = posts.filter(item => item.important).length;




    return (
        <>
            {posts.length ? (
                < List >
                    <Typography className={tasks} align='right' variant='body1' children={
                        `${itemsArray.length === 1
                            ? `1 task / ${important} important`
                            : `${itemsArray.length} tasks / ${important} important`
                        }`
                    } />
                    {itemsArray}
                </List>
            ) : (
                <Typography className={no__tasks} variant='body1' children={`No tasks =(`} align='center' />

            )}
            <Container maxWidth='xs'>
                <TaskAddForm
                    errorMessage={errorMessage}
                    value={value}
                    setValue={setValue}
                    addPost={addPost}
                    editTask={editTask}
                    snackbars={snackbars}
                />
            </Container>
        </>
    );
};

export default TasksList;