import React from "react";
import classes from '../css/AppBar.module.css'
import LogoutDropdown from './LogoutDropdown';

const AppBar = () => {
    return(
        <div className={classes.mainContainer}>
            <LogoutDropdown />
        </div>
    )
}

export default AppBar;