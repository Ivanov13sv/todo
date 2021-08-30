import { TextField, Fab, Tooltip } from '@material-ui/core';
import useStyles from '../../../../../styles';
import AddIcon from '@material-ui/icons/Add';


const PostAddForm = ({ create, value, setValue }) => {

    const addPosts = (e) => {
        e.preventDefault();
        if (value) {
            const newPost = {
                id: Date.now(),
                text: value,
                isComplete: false
            }
            create(newPost)
            setValue('')
        }
    };


    const { add__post__form } = useStyles();
    return (

        <form onSubmit={(e) => addPosts(e)} autoComplete='off' className={add__post__form}>
            <TextField onChange={(e) => setValue(e.target.value)} value={value} fullWidth id="standard-basic" label="Add task" />
            <Tooltip title='Add'>
                <Fab type='submit' style={{ marginTop: '15px' }} size='small' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
        </form>
    );
};

export default PostAddForm;