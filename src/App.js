import React, { useState } from 'react';
import AppHeader from './components/App-Header/AppHeader'
import SearchPanel from './components/Search-Panel/SearchPanel'
import PostListCopy from './components/Post-List/PostList';
import { AppBar, Container, CssBaseline, Typography } from '@material-ui/core'
import useStyles from './styles';
import PostAddForm from './components/Post-Add-Form/PostAddForm'
import PostList from './components/Post-List/PostList';



function App() {

    const { count__posts } = useStyles();

    const [itemsList, setItemsList] = useState([
        { id: 1, text: 'I\'m learning Material UI', checked: false },
        { id: 2, text: 'TestEEE', checked: false },
        { id: 3, text: 'DDDDDD', checked: false },
        { id: 4, text: 'ASDASD', checked: false },
        { id: 5, text: 'ASDAS1фывD', checked: false },
    ])

    const addPosts = () => {
        const newItem = { id: itemsList[itemsList.length - 1].id + 1, text: '555', checked: false }
        setItemsList([
            ...itemsList,
            newItem
        ])
    };


    return (
        <>
            <CssBaseline />
            <AppHeader />
            <Container maxWidth="xs">
                <Typography className={count__posts} align='right' variant='body1' children={`${itemsList.length} постов, из них 0 понравилось`} />
                <SearchPanel />
            </Container>
            <Container maxWidth="sm">
                <PostList posts={itemsList} />
            </Container>
            <Container maxWidth='xs'>
                <PostAddForm addPosts={addPosts} />
            </Container>

        </>
    );
}

export default App;
