import * as api from '../../api';
import async from "async";

const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) => {
    return {
        login: (userDetails, history) =>
            dispatch(
                login(userDetails, history)
            ),
        register: (userDetails, history) =>
            dispatch(
                register(userDetails, history)
            ),
    };
};


const login = (userDetails, history) => {
    return async (dispatch) => {
        const response = await api.login(userDetails);

        if (response.error) {
            // show error message in alert
        } else {
            const {userDetails} = response.data;
            localStorage.setItem("user", JSON.stringify(userDetails));
        }
    };
};