import { TextField, Fab, Tooltip, Zoom } from '@material-ui/core';
import useStyles from '../../../../../styles';
import AddIcon from '@material-ui/icons/Add';


const PostAddForm = ({ addPost, value, setValue, errorMessage }) => {

    const { add__post__form } = useStyles();
    return (

        <form onSubmit={(e) => addPost(e)} autoComplete='off' className={add__post__form}>
            <TextField
                onChange={(e) => setValue(e.target.value)}
                value={value}
                fullWidth
                id="standard-basic"
                label="Add task"
                helperText={value.length? '' : errorMessage}

            />
            <Tooltip disableTouchListener arrow TransitionComponent={Zoom} title='Add'>
                <Fab type='submit' style={{ marginTop: '15px' }} size='small' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
        </form>
    );
};

export default PostAddForm;