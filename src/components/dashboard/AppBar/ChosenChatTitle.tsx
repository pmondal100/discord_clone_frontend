import React from "react";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import { storeStructure, chatReducerStructure } from "../../common/utils/commonInterfaces";

const ChosenChatTitle = (props: chatReducerStructure) => {
  const username = props.chosenChatDetails?.username;  
  return (
    <Typography
      sx={{
        fontSize: "16px",
        color: "white",
        fontWeight: "bold",
      }}
    >
        {username ? `Chatting with: ${username}`: ""}
    </Typography>
  );
};

const mapStateToProps = (state: storeStructure) => {
  return {
    ...state.chatReducer,
  };
};

export default connect(mapStateToProps)(ChosenChatTitle);
