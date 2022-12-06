import React from 'react';
import { Typography } from '@mui/material';
import classes from './css/RegisterHeader.module.css';

const LoginHeader = () => {
    return(
        <div className={classes.headerLogin}>
            <Typography variant="h5" sx={{
                color: 'white',
                marginLeft: '3%'
            }}>
                Create an account
            </Typography>
        </div>
    )
}

export default LoginHeader;