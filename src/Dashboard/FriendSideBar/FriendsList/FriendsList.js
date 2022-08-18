import React from 'react';
import {styled} from "@mui/material/styles";
import FriendsListItem from "./FriendsListItem";
import {connect} from "react-redux"


const MainContainer = styled("div")({
    /* Telling the component to take up all the space it can. */
    flexGrow: 1,
    width: "100%",

});

const FriendsList = ({friends}) => {
    return (
        <MainContainer>
            {friends?.map((f) => (
                <FriendsListItem
                    username={f.username}
                    id={f.id}
                    key={f.id}
                    isOnline={f.isOnline}
                />

            ))}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({friends}) => {
    return {
        ...friends,
    }
}

export default connect(mapStoreStateToProps)(FriendsList);
