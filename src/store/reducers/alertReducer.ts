import { Action } from "@remix-run/router";
import { actionBody } from "../../components/common/utils/commonInterfaces";
import { actionTypes } from "../actions/alertActions";

const init = {
  alertType: "",
  alertMessage: "",
  alertOpen: false,
};

const alertReducer = (state = init, action: actionBody) => {
  switch (action.type) {
    case actionTypes.showAlert: {
      return {
        ...state,
        ...action.payload,
        alertOpen: true,
      };
    }
    case actionTypes.hideAlert: {
      return {
        ...state,
        alertOpen: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default alertReducer;
