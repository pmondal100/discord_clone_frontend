export interface loginReqBody {
  email: string;
  password: string;
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
  payload: Object;
}

export interface userDetailsStructure {
  token: string;
  email: string;
}
