import React, { useState } from 'react';
import { Container } from '@material-ui/core'
import TaskList from './TasksList/TasksList'



function TaskManager() {

    const [itemsList, setItemsList] = useState([

    ]);

    const [value, setValue] = useState('');

    const createPost = (newPost) => {
        setItemsList([
            ...itemsList,
            newPost
        ])
    }

    const removePost = (post) => {
        setItemsList([...itemsList.filter(item => item.id !== post.id)])
    }

    const editTask = (post) => {
        if (!value.length) {
            setItemsList([...itemsList.filter(item => item.id !== post.id)])
            setValue(post.text)
        }

    }

    const onToggleImportant = (id) => {
        const index = itemsList.findIndex(item => item.id === id);
        const old = itemsList[index];
        const newItem = { ...old, important: !old.important };

        setItemsList([
            ...itemsList.slice(0, index), newItem, ...itemsList.slice(index + 1)
        ])
    }


    return (
        <>
            <Container maxWidth="sm">
                <TaskList value={value} setValue={setValue} create={createPost} editTask={editTask} onToggleImportant={onToggleImportant} removePost={removePost} posts={itemsList} />
            </Container>
        </>
    );
}



export default TaskManager;
