export const openAlert = (msg: string, alertType: string) => {
    return {
        type: 'SHOW_ALERT',
        payload: {
            alertMessage: msg,
            alertType: alertType
        }
    }
}

export const closeAlert = () => {
    return {
        type: 'HIDE_ALERT',
        payload: {
            alertMessage: '',
            alertType: ''
        }
    }
}