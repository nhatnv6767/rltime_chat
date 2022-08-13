const alertActions = {
    SHOW_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
    CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE",
};

export const getActions = (dispatch) => {
    return {
        openAlertMessage: (content) => dispatch(openAlertMessage(content)),
        closeAlertMessage: () =>
            dispatch(closeAlertMessage())

    };
};