import React from "react";
import SingleMessage from "./SingleMessage";
import MessageHeader from "./MessageHeader";
import classes from "../css/Messages.module.css";
import { message } from "../../../common/utils/commonInterfaces";
import Seperator from "./DateSeperator";

interface propStructure {
  name: string;
  messages: Array<message>;
}

const getFormattedDate = (dateStr: string): string => {
  var monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dateObj = new Date(dateStr);
  if (dateStr === "") {
    dateObj = new Date();
  }
  let day = dateObj.getDate().toString();
  if (day.length < 2) {
    day = "0" + day;
  }
  const month = monthArr[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${day}-${month}-${year}`;
};

const getFormattedTime = (dateStr: string): string => {
  const hours = new Date(dateStr).getHours();
  const minutes = new Date(dateStr).getMinutes();

  return `${hours}:${minutes}`
}

const Messages = (props: propStructure) => {
  const { name, messages } = props;
  return (
    <div className={classes.mainContainer}>
      <MessageHeader name={name} />
      {messages.map((message, index) => {
        let sameDay = false,
          sameAuthor = false;
        if (
          index !== 0 &&
          getFormattedDate(message.date) ===
            getFormattedDate(messages[index - 1].date)
        ) {
          sameDay = true;
        }
        if (
          index !== 0 &&
          message.author.username === messages[index - 1].author.username
        ) {
          sameAuthor = true;
        }
        return (
          <div key={message._id} style={{ width: "97%" }}>
            {(!sameDay || index === 0) ? <Seperator date={getFormattedDate(message.date)} /> : null}
            <SingleMessage
              content={message.content}
              time={getFormattedTime(message.date)}
              username={message.author.username}
              sameAuthor={sameAuthor}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
