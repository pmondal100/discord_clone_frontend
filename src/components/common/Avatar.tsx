import React from "react";
import classes from './css/Avatar.module.css'

interface propStructure {
    username: string,
    large: Boolean
}

const Avatar = (props: propStructure) => {
    const { username, large } = props;
    const usernameArr = username.split("");
    return (
        <div className={classes.mainContainer} style={ large ? { height: '60px', width: '60px' } : {} }>
            {usernameArr[0] + '' + usernameArr[1]}
        </div>
    )
}

export default Avatar;