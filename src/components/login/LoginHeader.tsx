import React from 'react';
import { Typography } from '@mui/material';
import classes from './css/LoginHeader.module.css';

const LoginHeader = () => {
    return(
        <div className={classes.headerLogin}>
            <Typography variant="h5" sx={{
                color: 'white'
            }}>
                Welcome Back!!!
            </Typography>
            <Typography sx={{
                color:'white'
            }}>
                We are glad that you are with us.
            </Typography>
        </div>
    )
}

export default LoginHeader;