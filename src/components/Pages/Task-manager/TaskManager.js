import React, { useState } from 'react';
import { Container } from '@material-ui/core'
import TaskList from './TasksList/TasksList'



function TaskManager() {

    const [itemsList, setItemsList] = useState([
        { id: 1, text: 'React', important: false },
        { id: 2, text: 'Re123123act', important: false },
        { id: 3, text: '123', important: false }
    ]);
    const [value, setValue] = useState('');

    const [currentTask, setCurrentTask] = useState(null);

    const addPost = (e) => {
        e.preventDefault();
        if (value) {
            setItemsList([...itemsList, { id: Date.now(), text: value, important: false }])
            setValue('')
        }

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

    // Drag_n_drop functions

    const dragStartHandler = (e, item) => {
        console.log("drag", item);
        setCurrentTask(item);
    };

    const dragEndHandler = (e) => {
        e.target.style.background = "none";
    };

    const dragOverHandler = (e) => {
        e.preventDefault();
        e.target.style.background = "lightgray";
    };

    const dropHandler = (e, item) => {
        e.preventDefault();
        setItemsList(
            itemsList.map((c) => {
                if (c.id === item.id) {
                    return { ...c, index: currentTask.index };
                }
                if (c.id === currentTask.id) {
                    return { ...c, index: item.index };
                }
                return c;
            })
        );
        e.target.style.background = "none";
    };


    return (
        <>
            <Container maxWidth="sm">
                <TaskList 
                value={value} 
                setValue={setValue} 
                addPost={addPost} 
                editTask={editTask} 
                onToggleImportant={onToggleImportant} 
                removePost={removePost} posts={itemsList} 
                />
            </Container>
        </>
    );
}



export default TaskManager;
