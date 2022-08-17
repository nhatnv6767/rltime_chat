import {openAlertMessage} from "./alertActions";
import * as api from "../../api"

export const friendsActions = {
    SET_FRIENDS: "FRIENDS.SET_FRIENDS",
    SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
    SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
}

export const getActions = (dispatch) => {
    return {
        sendFriendInvitaion: (data, closeDialogHandler) =>
            dispatch(sendFriendInvitaion(data, closeDialogHandler))
    }
}

export const setPendingFriendsInvitations = (pendingFriendInvitations) => {
    return {
        type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
        pendingFriendInvitations
    }
}

const sendFriendInvitaion = (data, closeDialogHandler) => {
    return async (dispatch) => {
        const response = await api.sendFriendInvitaion(data, closeDialogHandler)
        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data))
        } else {
            dispatch(openAlertMessage("Invitation has been sent!"))
            closeDialogHandler();
        }
    }
}