import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root:{
        transition: 'all 1s ease-out'
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
    icon__heart: {
        opacity: '0',
        transform: 'translateX(0px)',
    },
    liked: {
        opacity: '1',
        transform: 'translateX(0px)',
    },
    post__item: {
        backgroundColor: '#f1f1f1',
        margin: '15px',
        border: '1px solid #d0d0d0',
        borderRadius: '10px',
        width: 'auto',
        "&:hover": {
        },
        '&__active':{
            color: 'red'
        }
    },
    add__post__form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button:{
        "&:hover": {
            cursor: 'pointer'
        },
    },
    count__posts:{
        marginTop: '30px',
    }

}))

export default useStyles;