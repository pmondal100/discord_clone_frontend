import React from "react";
import classes from '../css/AppBar.module.css'
import LogoutDropdown from './LogoutDropdown';
import ChosenChatTitle from "./ChosenChatTitle";
// import { connect } from "react-redux";
// import { storeStructure } from "../../common/utils/commonInterfaces";

const AppBar = () => {
    return(
        <div className={classes.mainContainer}>
            <ChosenChatTitle />
            <LogoutDropdown />
        </div>
    )
}


export default AppBar;