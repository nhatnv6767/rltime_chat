import * as api from '../../api';

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