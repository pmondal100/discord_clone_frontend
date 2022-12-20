import { actionBody } from "../../components/common/utils/commonInterfaces";
import { actionTypes } from "../actions/friendsActions";

const init = {
    friendsList: [],
    invitationsList: [],
    onlineFriendsList: []
}

const friendsReducer = (state = init, action: actionBody) => {
    switch(action.type){
        case actionTypes.setFriendsList:
            return{
                ...state,
                friendsList: action.payload
            }
        case actionTypes.setInvitationsList:
            return {
                ...state,
                invitationsList: action.payload
            }
        case actionTypes.setOnlineFriendsList:
            return {
                ...state,
                onlineFriendsList: action.payload
            }
        default: 
            return {
                ...state
            }

    }
}

export default friendsReducer;