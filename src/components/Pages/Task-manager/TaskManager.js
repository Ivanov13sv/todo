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
    const [errorMessage, setErrorMessage] = useState('')
    const [currentTask, setCurrentTask] = useState(null);
    const [successSnackbar, setSuccessSnackbar] = useState(false);
    const [errorSnackbar, setErrorSnackbar] = useState(false);


    const addPost = (e) => {
        e.preventDefault();
        if (value.length) {
            setItemsList([...itemsList, { id: Date.now(), text: value, important: false }]);
            setValue('');
            setErrorMessage('');
            setSuccessSnackbar(true);
            setErrorSnackbar(false);
        } else {
            setErrorMessage('empty input');
        }



    }

    const removePost = (post) => {
        setItemsList([...itemsList.filter(item => item.id !== post.id)])
    }

    const editTask = (post) => {

        if (!value.length) {
            setItemsList([...itemsList.filter(item => item.id !== post.id)])
            setValue(post.text)
        } else if (value.length) {
            setErrorSnackbar(true)
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

    // Drag_n_drop functions

    const dragStartHandler = (e, item) => {

        setCurrentTask(item);
        setTimeout(() => {
            e.target.style.opacity = '0';
        }, 0);

    };

    const dragEndHandler = (e) => {
        e.target.style.opacity = '1'

    };

    const dragOverHandler = (e) => {
        e.preventDefault();
    };

    const dropHandler = (e, item) => {
        e.preventDefault();
        setItemsList(
            itemsList.map((c) => {
                if (c.id === item.id) {
                    return { ...c, id: currentTask.id };
                }
                if (c.id === currentTask.id) {
                    return { ...c, id: item.id };
                }
                return c;
            })
        );

    };


    const taskManagerProps = {
        snackbars: {
            successSnackbar,
            setSuccessSnackbar,
            errorSnackbar,
            setErrorSnackbar
        },
        dragNdropFns: {
            dragStartHandler,
            dragEndHandler,
            dragOverHandler,
            dropHandler
        }
    }


    return (
        <>
            <Container maxWidth="sm">
                <TaskList
                    value={value}
                    setValue={setValue}
                    addPost={addPost}
                    editTask={editTask}
                    onToggleImportant={onToggleImportant}
                    removePost={removePost}
                    posts={itemsList}
                    dragNdropFns={taskManagerProps.dragNdropFns}
                    errorMessage={errorMessage}
                    snackbars={taskManagerProps.snackbars}
                />
            </Container>
        </>
    );
}



export default TaskManager;


//
