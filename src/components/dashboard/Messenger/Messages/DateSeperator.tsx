import React from "react";
import classes from "../css/DateSeperator.module.css";

interface propStructure {
    date: string
}

const Seperator = (props: propStructure) => {
    const { date } = props;

    return (
        <div className={classes.seperator}>
            <span className={classes.dateLabel}>{date}</span>
        </div>
    )
}

export default Seperator;