import React, { useState } from 'react';
import { Container} from '@material-ui/core'
import useStyles from '../../../styles';
import TaskList from './TasksList/TasksList'
import TaskAddForm from './TaskAddForm/TaskAddForm'



function TaskManager() {

    const { count__posts } = useStyles();

    const [itemsList, setItemsList] = useState([
        { id: 1, text: 'I\'m learning Material UI', important: false },
        { id: 2, text: 'TestEEE', important: false },
        { id: 3, text: 'DDDDDD', important: false },
        { id: 4, text: 'ASDASD', important: false },
        { id: 5, text: 'ASDAS1фывD', important: false },
    ])


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
        // const newArr = itemsList.filter(item => {
        //     return item.id !== post.id;
        // })
        setItemsList([...itemsList.filter(item => {
            const text = item.text;
            return item.id !== post.id;
        })])
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
                <TaskList onToggleImportant={onToggleImportant} removePost={removePost} posts={itemsList} />
            </Container>
            <Container maxWidth='xs'>
                <TaskAddForm editTask={editTask} create={createPost} />
            </Container>

        </>
    );
}

export default TaskManager;
