export const actionTypes =  {
        showAlert: 'SHOW_ALERT',
        hideAlert: 'HIDE_ALERT'
}

export const openAlert = (msg: string, alertType: string) => {
    return {
        type: actionTypes.showAlert,
        payload: {
            alertMessage: msg,
            alertType: alertType
        }
    }
}

export const closeAlert = () => {
    return {
        type: actionTypes.hideAlert
    }
}