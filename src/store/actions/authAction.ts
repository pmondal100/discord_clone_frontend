import { Dispatch } from "react";
import { loginAPI, registerAPI } from "../../api";



interface loginReqBody {
  email: string;
  password: string;
}

interface registerReqBody {
  email: string;
  password: string;
  username: string;
}

interface dispatchBodyStructure {
  type: string;
  payload: Object;
}

interface userDetailsStructure {
  token: string;
  email: string;
}

const setUserData = (userDetails: userDetailsStructure) => {
  return {
    type: "SET_USER_DETAILS",
    payload: { ...userDetails },
  };
};

export const loginAction = (reqBody: loginReqBody, navigate: Function) => {
  return async (dispatch: Dispatch<dispatchBodyStructure>) => {
    const res: any = await loginAPI(reqBody);
    if (res.error) {
      //show some sort of alert or modal
    } else {
      const userDetails: userDetailsStructure = {
        token: res.data.token,
        email: res.data.email,
      };
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserData(userDetails));
      navigate('/dashboard');
    }
  };
};

export const registerAction = (reqBody: registerReqBody, navigate: Function) => {
  return async (dispatch: Dispatch<dispatchBodyStructure>) => {
    const res: any = await registerAPI(reqBody);
    if (res.error) {
      //show some sort of alert or modal
    } else {
      const userDetails: userDetailsStructure = {
        token: res.data.token,
        email: res.data.email,
      };
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserData(userDetails));
      navigate('/dashboard');
    }
  };
};
