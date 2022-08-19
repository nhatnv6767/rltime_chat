import React from 'react';
import {styled} from "@mui/material/styles";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";
import {connect} from 'react-redux';

const MainContainer = styled("div")({
    width: "72px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#202225"
});

const SideBar = ({activeRooms}) => {
    return (
        <MainContainer>
            <MainPageButton/>
            <CreateRoomButton/>
            {activeRooms.map((room) => (
                <ActiveRoomButton
                    roomId={room.roomId}
                    creatorUsername={room.creatorUsername}
                    amountOfParticipants={room.amountOfParticipants}
                    key={room.roomId}
                    isUserInRoom={isUserInRoom}
                />
            ))}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({room}) => {
    return {
        ...room,
    }
}

export default connect(mapStoreStateToProps)(SideBar);
