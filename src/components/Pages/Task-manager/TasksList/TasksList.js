import React, { useState} from 'react';
import { List, Typography, Container } from '@material-ui/core';
import TaskListItem from './TaskListItem/TaskListItem';
import useStyles from '../../../../styles';
import TaskAddForm from './TaskAddForm/TaskAddForm'


const TasksList = () => {


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


    // useEffect

    // useEffect(() => {
    //     const temp = localStorage.getItem('todos')
    //     const loadedTodos = JSON.parse(temp)
    //     console.log(loadedTodos)

    //     if (loadedTodos) {
    //         setItemsList(temp)
    //     }
    // }, [])

    // useEffect(() => {
    //     const temp = JSON.stringify(itemsList);
    //     localStorage.setItem('todos', temp);
    // }, [itemsList])


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
    };

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

    const sortCards = (a, b) => {
        if (a.id > b.id) {
            return 1;
        } else {
            return -1;
        }
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




    const { tasks, no__tasks } = useStyles();
    const itemsArray = itemsList.sort(sortCards).map(post => {
        return <TaskListItem
            setValue={setValue}
            editTask={editTask}
            onToggleImportant={onToggleImportant}
            important={post.important}
            removePost={removePost}
            key={post.id}
            text={post.text}
            post={post}
            dragNdropFns={taskManagerProps.dragNdropFns}
        />

    })
    const important = itemsList.filter(item => item.important).length;


    return (
        <>
            {itemsList.length ? (
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
                    snackbars={taskManagerProps.snackbars}
                />
            </Container>
        </>
    );
};

export default TasksList;