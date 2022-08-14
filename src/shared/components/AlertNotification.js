import React from 'react';
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import {connect} from 'react-redux';
import {getActions} from "../../store/actions/alertActions";

const AlertNotification = (props) => {
    return (
        <Snackbar
            anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            open
            onClose={() => {
            }}
            // autoHideDuration={6000}
        >
            <Alert severity="info">
                Alert message
            </Alert>
        </Snackbar>
    );
};

const mapStoreStateToProps = ({alert}) => {
    return {
        ...alert
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    };
};

export default AlertNotification;
