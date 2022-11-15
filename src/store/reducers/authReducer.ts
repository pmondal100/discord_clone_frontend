import { authAction } from '../actions/authAction';

interface actionBody {
    type: String,
    payload?: Object | String
}


const init = {
    userDetails: {}
}

const authReducer = (state = init, action: actionBody) => {
    switch (action.type) {
        case 'auth': {
            return authAction();
        }
        default: {
            return { ...state }
        }
    }
}

export default authReducer;