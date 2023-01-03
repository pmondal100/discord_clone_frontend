import { dispatchBodyStructure } from "../../components/common/utils/commonInterfaces"
export const actionTypes =  {
        showAlert: 'SHOW_ALERT',
        hideAlert: 'HIDE_ALERT'
}

export const openAlert = (msg: string, alertType: string): dispatchBodyStructure => {
    return {
        type: actionTypes.showAlert,
        payload: {
            alertMessage: msg,
            alertType: alertType
        }
    }
}

export const closeAlert = (): dispatchBodyStructure => {
    return {
        type: actionTypes.hideAlert
    }
}