import { sendFriendInvitationAPI } from "../../api";
import { openAlert, closeAlert } from "./alertActions";
import { dispatchBodyStructure } from "../../components/common/utils/commonInterfaces";
import { Dispatch } from "react";

export const actionTypes = {
  setFriendsList: "SET_FRIENDS",
  setInvitationsList: "SET_INVITATIONS",
  setOnlineFriendsList: "SET_ONLINE",
};

export const sendInvitation = (data: any) => {
  return async (dispatch: Dispatch<dispatchBodyStructure>) => {
    const res: any = await sendFriendInvitationAPI(data);
    if (res.error) {
      dispatch(openAlert(res?.errorObj?.response?.data, "error"));
    } else {
      dispatch(openAlert('Friend request sent successfully', "success"));
      closeAlert();
    }
  };
};
