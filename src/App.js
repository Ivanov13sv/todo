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

    const onToggleImportant = (id) =>{
        const index = itemsList.findIndex(item => item.id === id);
        const old = itemsList[index];
        const newItem = {...old, important: !old.important};

        setItemsList([
            ...itemsList.slice(0, index), newItem, ...itemsList.slice(index + 1)
        ])
    }




    return (
        <>
            <CssBaseline />
            <AppHeader />
            <Container maxWidth="xs">
                <Typography className={count__posts} align='right' variant='body1' children={`${itemsList.length} постов, из них 0 понравилось`} />
                <SearchPanel />
            </Container>
            <Container maxWidth="sm">
                <PostList onToggleImportant={onToggleImportant} removePost={removePost} posts={itemsList} />
            </Container>
            <Container maxWidth='xs'>
                <PostAddForm create={createPost} />
            </Container>

        </>
    );
}
//test
export default App;
