
export interface loginReqBody {
  email: string;
  password: string;
}

export interface storeStructure {
  authReducer: Object;
  alertReducer: Object;
  friendsReducer: Object;
}

export interface registerReqBody {
  email: string;
  password: string;
  username: string;
}

export interface actionBody {
  type: String;
  payload?: Object | String;
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