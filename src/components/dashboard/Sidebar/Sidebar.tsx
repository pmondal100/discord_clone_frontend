import React from "react";
import classes from "../css/Sidebar.module.css";
import GroupIcon from "./GroupsIcon";
import AddRoomIcon from "./AddRoomIcon";

const Sidebar = () => {
  return (
    <div className={classes.mainContainer}>
      <GroupIcon />
      <AddRoomIcon />
    </div>
  );
};

export default Sidebar;
