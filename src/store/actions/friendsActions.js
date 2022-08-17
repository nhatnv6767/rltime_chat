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