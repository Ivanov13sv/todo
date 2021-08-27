import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    app__header: {
        marginRight: '30px'
    },
    search__panel: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',

    },
    search__field: {
        width: 'auto',
        flexGrow: '1',
        color: 'red'
    },
    icon__star: {
        // opacity: '0',
        transform: 'translateX(0px)',
        color: '#ff9800',

        '&.important': {
            color: '#aeaeae'
        }
    },
    post__item: {
        transition: 'all 500ms',
        backgroundColor: '#f1f1f1',
        margin: '15px',
        borderRadius: '10px',
        width: 'auto',
        border: '1px solid #f1f1f1',
        '&.important': {
            border: '1px solid #ffad33;',
            boxShadow: '0 0 0.3em 0 #ff9800, inset 0 0 0.3em 0 #ff9800'
            
        }
    },
    add__post__form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        "&:hover": {
            cursor: 'pointer'
        },
    },
    count__posts: {
        marginTop: '30px',
    }

}))
export default useStyles;