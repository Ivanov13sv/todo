import React from 'react';
import { Button } from '@material-ui/core';


const MyButton = ({ children, ...props }) => {

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    return (
        <Button {...props} >{children}</Button>
    );
};

export default MyButton;