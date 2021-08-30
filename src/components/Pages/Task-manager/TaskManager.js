import React, { useState } from 'react';
import { Container } from '@material-ui/core'
import useStyles from '../../../styles';
import TaskList from './TasksList/TasksList'
import TaskAddForm from './TasksList/TaskAddForm/TaskAddForm'



function TaskManager() {

    const { count__posts } = useStyles();

    const [itemsList, setItemsList] = useState([
        { id: 1, text: 'I\'m learning Material UI', important: false },
        { id: 2, text: 'TestEEE', important: false },
        { id: 3, text: 'DDDDDD', important: false },
        { id: 4, text: 'ASDASD', important: false },
        { id: 5, text: 'ASDAS1фывD', important: false },
    ]);

    const [value, setValue] = useState('123');


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
        setItemsList([...itemsList.filter(item => item.id !== post.id)])
        setValue(post.text)
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
