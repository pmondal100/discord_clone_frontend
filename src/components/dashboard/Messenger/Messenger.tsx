import React from "react";
import classes from '../css/Messenger.module.css';
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";
import { storeStructure, chatReducerStructure, message } from "../../common/utils/commonInterfaces";
import { connect } from "react-redux";

const Messenger = (props: chatReducerStructure) => {
    return (
        <div className={classes.mainContainer}>
            {!props.chosenChatDetails ? <WelcomeMessage /> : <MessengerContent chosenChatDetails={props.chosenChatDetails} messages={props.messages || []}/>}
        </div>
    )
}

const mapStateToProps = (state: storeStructure) => {
    return {
        ...state.chatReducer
    }
}

export default connect(mapStateToProps)(Messenger);