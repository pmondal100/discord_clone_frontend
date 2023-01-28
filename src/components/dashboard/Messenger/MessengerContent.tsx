import React, { useEffect, useRef } from "react";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { message } from "../../common/utils/commonInterfaces";

interface propStructure {
  chosenChatDetails: {
    id: string;
    username: string;
  };
  messages: Array<message>;
}

const MessengerContent = (props: propStructure) => {
  const { chosenChatDetails, messages } = props;

  useEffect(() => {
    //some logic to fetch messages for the chosen user...
  }, [chosenChatDetails, messages]);

  return (
    <div style={{ flexGrow: "1" }}>
      <Messages name={chosenChatDetails.username} messages={messages} />
      <NewMessageInput chosenChatDetails={{ ...chosenChatDetails }} />
    </div>
  );
};

export default MessengerContent;
