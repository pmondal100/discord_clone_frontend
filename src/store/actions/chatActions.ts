import { dispatchBodyStructure } from "../../components/common/utils/commonInterfaces"

export const actionTypes = {
    setChatDetails: 'SET_CHAT_DETAILS',
    setChatMessages: 'SET_CHAT_MESSAGES',
    setChatType: 'SET_CHAT_TYPE'
}

export const setChatDetailsAction = (chatType: string, chatDetails: Object): dispatchBodyStructure => {
    return {
        type: actionTypes.setChatDetails,
        payload: {
            chatType,
            chatDetails
        }
    }
}

export const setChatMessagesAction = (messages: Array<String>): dispatchBodyStructure => {
    return {
        type: actionTypes.setChatMessages,
        payload: messages
    }
}