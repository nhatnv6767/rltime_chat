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

const Room = () => {
    return (
        <MainContainer>
        </MainContainer>
    );
};

export default Room;
