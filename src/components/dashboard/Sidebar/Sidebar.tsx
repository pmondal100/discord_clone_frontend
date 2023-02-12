import React from "react";
import classes from '../css/Sidebar.module.css';
import GroupIcon from "./GroupsIcon";

const Sidebar = () => {
    return (
        <div className={classes.mainContainer}>
           <GroupIcon />
        </div>
    )
}

export default Sidebar;