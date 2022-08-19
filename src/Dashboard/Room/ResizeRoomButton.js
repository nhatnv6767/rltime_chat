import React from 'react';
import {styled} from "@mui/material/styles";

const MainContainer = styled("div")({
    position: "absolute",
    bottom: "10px",
    right: "10px",

})

const ResizeRoomButton = ({isRoomMinimized, handleRoomResize}) => {
    return (
        <MainContainer>

        </MainContainer>
    );
};

export default ResizeRoomButton;
