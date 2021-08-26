import React, { useState } from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import useStyles from '../../styles';



const PostStatusFilter = () => {

    const { button } = useStyles();

    return (
        <ButtonGroup className={button} color="primary" aria-label="outlined primary button group">
            {/* <MyButton onClick={handleActive} active={active} size='small'>Все</MyButton>
            <MyButton size='small'>Понравились</MyButton> */}
                <Button >Все</Button>
            <Button>Понравились</Button>
        </ButtonGroup>

    );
};

export default PostStatusFilter;