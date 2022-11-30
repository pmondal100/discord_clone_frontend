interface actionBody {
    type: String,
    payload?: Object | String
}

const init = {
    userDetails: {}
}

const authReducer = (state = init, action: actionBody) => {
    switch (action.type) {
        case 'SET_USER_DETAILS': {
            return {
                ...state,
                userDetails: {
                    ...action.payload
                }
            }
        }
        default: {
            return { ...state }
        }
    }
}

export default authReducer;