import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

    root: {
        "& .MuiFormHelperText-root": {
            color: '#ff5050',
            position: 'absolute',
            top: '50px'
        },
        // 

        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
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

        },
        "&:hover": {
            cursor: 'grab',
            backgroundColor: 'rgba(230,230,230,0.9)',
        },
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
    },
    tasks: {
        color: '#696969',
        fontSize: '16px',
        fontWeight: '400',
        margin: '50px 0 10px 0',
        paddingRight: '16px'
    },
    no__tasks: {
        color: '#696969',
        fontSize: '20px',
        fontWeight: '400',
        margin: '50px 0 10px 0'
    },


}))
export default useStyles;