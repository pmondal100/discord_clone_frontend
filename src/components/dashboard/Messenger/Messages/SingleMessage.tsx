import React from "react";
import Avatar from "../../../common/Avatar";
import { Typography } from "@mui/material";
import classes from "../css/SingleMessage.module.css";

interface propStructure {
  content: string;
  time: string;
  username: string;
  sameDay: boolean;
  sameAuthor: boolean;
}

const SingleMessage = (props: propStructure) => {
  const { content, time, username, sameAuthor, sameDay } = props;

  if (sameAuthor && sameDay) {
    return (
      <div className={classes.sameAuthorMessageContent}>
        <div className={classes.sameAuthorMessageText}>{content}</div>
      </div>
    );
  }
    return (
        <div className={classes.mainContainer}>
            <div className={classes.avatarContainer}>
                <Avatar username={username} large={true} />
            </div>
            <div className={classes.messageContainer}>
                <Typography sx={{
                    fontSize: '16px',
                    color: 'white'
                }}>
                    {username}{" "}
                    <span style={{fontSize: '12px', color: '#72767d'}}>{time}</span>
                </Typography>
                <div className={classes.messageContent}>{content}</div>
            </div>
        </div>
    )


};

export default SingleMessage;
