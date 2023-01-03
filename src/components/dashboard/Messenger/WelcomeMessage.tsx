import React from "react";
import { Typography } from "@mui/material";
import classes from './css/WelcomeMessage.module.css';

const WelcomeMessage = () => {
    return(
        <div className={classes.mainContainer}>
            <Typography variant="h6" sx={{color: 'white'}}>
                To start chatting - choose conversation
            </Typography>
        </div>
    )
}

export default WelcomeMessage;