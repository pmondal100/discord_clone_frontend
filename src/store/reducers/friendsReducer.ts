import { actionBody } from "../../components/common/utils/commonInterfaces";
import { actionTypes } from "../actions/friendsActions";

const init = {
    friendsList: [],
    invitationList: []
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
                invitationList: action.payload
            }
        default: 
            return {
                ...state
            }

    }
}

export default friendsReducer;