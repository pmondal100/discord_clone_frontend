import { actionTypes } from "../actions/chatActions";
import { actionBody } from "../../components/common/utils/commonInterfaces";
const init = {
    chosenChatDetails: null,
    chatType: null,
    messages: []
}

const chatReducer = (state=init, action: actionBody) => {
    switch(action.type){
        case actionTypes.setChatDetails:
            return {
                ...state,
                chatType: action.payload?.chatType,
                chosenChatDetails: action.payload?.chatDetails
            }
        case actionTypes.setChatMessages:
            return {
                ...state,
                messages: action.payload
            }    
        default: {
            return {
                ...state
            }
        }    
    }
}

export default chatReducer;