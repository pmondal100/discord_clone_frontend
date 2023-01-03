import React from "react";
import SingleMessage from "./SingleMessage";
import MessageHeader from "./MessageHeader";
import classes from '../css/Messages.module.css';
import { connect } from "react-redux";
import {
  chatReducerStructure,
  storeStructure,
} from "../../../common/utils/commonInterfaces";

interface propStructure extends chatReducerStructure {
  name: string;
}

const Messages = (props: propStructure) => {
  const { name, messages } = props;
  const DUMMY_MESSAGES = [
    {
      _id: 1,
      content: "hello",
      sameAuthor: false,
      author: {
        username: "Marek",
      },
      date: "22/01/2022",
      sameDay: false,
    },
    {
      _id: 2,
      content: "hello once again",
      sameAuthor: true,
      author: {
        username: "Marek",
      },
      date: "22/01/2022",
      sameDay: true,
    },
    {
      _id: 3,
      content: "hello third time",
      sameAuthor: true,
      author: {
        username: "Marek",
      },
      date: "23/01/2022",
      sameDay: false,
    },
    {
      _id: 4,
      content: "hello response first time",
      sameAuthor: false,
      author: {
        username: "John",
      },
      date: "23/01/2022",
      sameDay: true,
    },
    {
      _id: 5,
      content: "hello response third time",
      sameAuthor: true,
      author: {
        username: "John",
      },
      date: "24/01/2022",
      sameDay: false,
    },
  ];
  return (
    <div className={classes.mainContainer}>
      <MessageHeader name={name} />
      { DUMMY_MESSAGES.map((message, index) => {
        return (
          <SingleMessage key={message._id} content={message.content} date={message.date} username={message.author.username} sameAuthor={message.sameAuthor} sameDay={message.sameDay} />
        )
      })
      }
    </div>
  );
};

const mapStateToProps = (state: storeStructure) => {
  return {
    ...state.chatReducer,
  };
};

export default connect(mapStateToProps)(Messages);
