import { Dispatch } from "react";
import { loginAPI, registerAPI } from "../../api";
import { openAlert } from './alertActions';
import { loginReqBody, registerReqBody } from '../../components/common/utils/commonIntefaces'
import { dispatchBodyStructure } from '../../components/common/utils/commonIntefaces'; 

interface userDetailsStructure {
  token: string;
  email: string;
}

export const actionTypes = {
      setUserDetails: "SET_USER_DETAILS",
}

const setUserData = (userDetails: userDetailsStructure) => {
  return {
    type: actionTypes.setUserDetails,
    payload: { ...userDetails },
  };
};

export const loginAction = (reqBody: loginReqBody, navigate: Function) => {
  return async (dispatch: Dispatch<dispatchBodyStructure>) => {
    const res: any = await loginAPI(reqBody);
    if (res.error) {
      //show some sort of alert or modal
      dispatch(openAlert(res?.errorObj?.response?.data, 'error'));
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
      dispatch(openAlert(res?.errorObj?.response?.data, 'error'));
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
