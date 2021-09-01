import React from 'react';
import { Typography, AppBar, Toolbar, SvgIcon  } from '@material-ui/core';
import useStyles from '../../styles';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';


const AppHeader = () => {

    const classes = useStyles();

    return (
            <AppBar position="static">
                <Toolbar >
                    <SvgIcon className={classes.app__header} fontSize='large' >
                        <ArtTrackIcon  />
                    </SvgIcon>

                    <Typography variant="h6" >
                        TASK CUTTER
                    </Typography>
                </Toolbar>
            </AppBar>
    );
};

export default AppHeader;
