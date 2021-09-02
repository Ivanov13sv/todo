import React from 'react';
import { Container } from '@material-ui/core'
import TaskList from './TasksList/TasksList'



function TaskManager() {

    return (
        <>
            <Container maxWidth="sm">
                <TaskList />
            </Container>
        </>
    );
}



export default TaskManager;


//
