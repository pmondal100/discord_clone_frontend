import chatReducer from "../../../store/reducers/chatReducer";

export interface loginReqBody {
  email: string;
  password: string;
}

export interface storeStructure {
  authReducer: Object;
  alertReducer: Object;
  friendsReducer: Object;
  chatReducer: chatReducerStructure;
}

export interface registerReqBody {
  email: string;
  password: string;
  username: string;
}

export interface actionBody {
  type: String;
  payload?: 
    {
      chatType?: string;
      chatDetails?: Object;
    }
}

export interface dispatchBodyStructure {
  type: string;
  payload?: Object;
}
export interface userDetailsStructure {
  token: string;
  email: string;
}

export interface pendingInvitations {
  _id: string,
  senderId: Object
}

export interface chatReducerStructure {
  chosenChatDetails?: {
    username: string,
    id: string
},
chatType?: string,
messages?: Array<message>
}

export interface message {
  _id: string,
  content: string,
  sameAuthor: boolean,
  author: {
    username: string,
    _id: string
  },
  date: string,
  sameDay: boolean
}
