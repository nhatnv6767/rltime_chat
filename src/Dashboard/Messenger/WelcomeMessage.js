import React from 'react';
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const Wrapper = styled("div")({
    flexGrow: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const WelcomeMessage = () => {
    return (
        <Wrapper>
            <Typography>To start chatting - choose conversation</Typography>
        </Wrapper>
    );
};

export default WelcomeMessage;
