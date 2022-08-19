import React from 'react';
import {styled} from "@mui/material/styles";

const MainContainer = styled("div")({
    position: "absolute",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#202225"
})

const fullScreenRoomStyle = {
    width: "100%",
    height: "100vh",
}

const minimizedRoomStyle = {
    bottom: "0px",
    right: "0px",
    width: "30%",
    height: "40vh",
}

const Room = () => {
    return (
        <MainContainer>
        </MainContainer>
    );
};

export default Room;
