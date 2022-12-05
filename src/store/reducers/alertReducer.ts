import { Action } from "@remix-run/router";

interface actionBody {
  type: String;
  payload?: Object | String;
}

const init = {
  alertType: "",
  alertMessage: "",
  alertOpen: false,
};

const alertReducer = (state = init, action: actionBody) => {
  switch (action.type) {
    case "SHOW_ALERT": {
      return {
        ...state,
        ...action.payload,
        alertOpen: true,
      };
    }
    case "HIDE_ALERT": {
      return {
        ...state,
        ...action.payload,
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
