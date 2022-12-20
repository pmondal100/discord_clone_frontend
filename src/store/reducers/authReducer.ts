import { actionBody } from "../../components/common/utils/commonInterfaces";
import { actionTypes } from "../actions/authActions";

const init = {
  userDetails: {},
};

const authReducer = (state = init, action: actionBody) => {
  switch (action.type) {
    case actionTypes.setUserDetails: {
      return {
        ...state,
        userDetails: {
          ...action.payload,
        },
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default authReducer;
