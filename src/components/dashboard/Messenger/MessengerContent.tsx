import React, { useEffect, useRef } from "react";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";

interface propStructure {
  chosenChatDetails: {
    id: string;
    username: string;
  };
}

const MessengerContent = (props: propStructure) => {
  const { chosenChatDetails } = props;

  useEffect(() => {
    //some logic to fetch messages for the chosen user...
  }, [chosenChatDetails]);

  return (
    <div style={{ flexGrow: "1" }}>
      <Messages name={chosenChatDetails.username} />
      <NewMessageInput chosenChatDetails={{...chosenChatDetails}}/>
    </div>
  );
};

export default MessengerContent;
