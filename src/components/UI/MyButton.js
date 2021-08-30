import React from 'react';
import { Button } from '@material-ui/core';


const MyButton = ({ children, ...props }) => {

    return (
        <Button {...props} >{children}</Button>
    );
};

export default MyButton;