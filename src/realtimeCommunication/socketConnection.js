import io from 'socket.io-client';
import store from "../store/store";
import {setPendingFriendsInvitations, setFriends, setOnlineUsers} from "../store/actions/friendsActions";

let socket = null;
export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken,
        },
    });

    socket.on('connect', () => {
        console.log('Successfully connected with socket.io server');
        console.log(socket.id);
    });

    socket.on("friends-invitations", (data) => {
        const {pendingInvitations} = data;
        store.dispatch(setPendingFriendsInvitations(pendingInvitations))
    })

    socket.on("friends-list", (data) => {
        const {friends} = data;
        store.dispatch(setFriends(friends))
    })

    socket.on("online-users", (data) => {
        const {onlineUsers} = data;
        store.dispatch(setOnlineUsers(onlineUsers))
    })

    socket.on("direct-chat-history", (data) => {
        console.log("direct chat history came from server")
        console.log(data)
    })
};

export const sendDirectMessage = (data) => {
    console.log("Data", data)
    socket.emit("direct-message", data);
}

export const getDirectChatHistory = (data) => {
    socket.emit("direct-chat-history", data)
}