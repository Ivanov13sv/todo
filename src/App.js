import AppHeader from './components/App-Header/AppHeader'
import { Container, CssBaseline } from '@material-ui/core'
import TaskManager from './components/Pages/Task-manager/TaskManager'

function App() {

    return (
        <>
            <CssBaseline />
            <AppHeader />
            <Container maxWidth="sm">
                <TaskManager />
            </Container>
        </>
    );
}

export default App;
