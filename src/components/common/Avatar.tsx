import React from "react";
import classes from './css/Avatar.module.css'

interface propStructure {
    username: string,
    large: Boolean
}

const Avatar = (props: propStructure) => {
    const { username, large } = props;
    return (
        <div className={classes.mainContainer} style={ large ? { height: '80px', width: '80px' } : {} }>
            {username.split('')[0]}
        </div>
    )
}

export default Avatar;