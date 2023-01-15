import React, { useState } from "react";
import classes from './css/NewMessageInput.module.css';
import { sendMessage } from '../../../realTimeCommunication/realTimeCommunication';

interface propStructure {
  chosenChatDetails: {
    id: string;
    username: string;
  };
}

const NewMessageInput = (props: propStructure) => {

  const onChangeHandler = (value: string): void => {
    setMessage(value);
  }

  const handleKeydown = (key: string): void => {
    if(key === "Enter" && message.length > 0){
      console.log(`Emit socket.io event for the server with the message ${message}.`);
      sendMessage({ targetId: chosenChatDetails.id, message });
      setMessage("");
    }
  }

  const { chosenChatDetails } = props;
  const [ message, setMessage ] = useState("");
  return (
    <div className={classes.mainContainer}>
      <input onKeyDown={(e) => handleKeydown(e.key)} onChange={(e) => onChangeHandler(e.target.value)} className={classes.input} type="text" placeholder={`Write message for ${chosenChatDetails.username}`} value={message}/>
    </div>
  );
};

export default NewMessageInput;
