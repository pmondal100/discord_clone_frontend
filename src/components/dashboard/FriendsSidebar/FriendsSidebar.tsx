import React from "react";
import classes from '../css/FriendsSidebar.module.css';
import Button from '@mui/material/Button';

const FriendsSidebar = () => {
    return (
        <div className={classes.mainContainer}>
            <Button className={classes.button} variant="contained" color="success" size="small" sx={{
                marginTop: '10px',
                marginLeft: '5px',
                width: '80%',
                height: '30px',
                textTransform: 'none',
                fontSize: '14px'
            }}>Add Friend</Button>
        </div>
    )
}

export default FriendsSidebar;