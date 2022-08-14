import React from 'react';
import {styled} from "@mui/material/styles";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";

const MainContainer = styled("div")({
    width: "224px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2F3136",
});

const FriendSideBar = () => {
    return (
        <MainContainer>
            <AddFriendButton/>
            <FriendsTitle title="Private Messages"/>
            <FriendsList/>
            <FriendsTitle title="Invitations"/>
        </MainContainer>
    );
};

export default FriendSideBar;
