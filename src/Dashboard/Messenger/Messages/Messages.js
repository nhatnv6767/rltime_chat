import React from 'react';
import {styled} from "@mui/material/styles";
import MessagesHeader from "./MessagesHeader"
import {connect} from "react-redux"
import DUMMY_MESSAGES from "./DUMMY_MESSAGES"

const MainContainer = styled("div")({
    height: "calc(100% - 60px)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

const Messages = ({chosenChatDetails, messages}) => {
    return (
        <MainContainer>
            <MessagesHeader
                name={chosenChatDetails?.name}
            />
            {
                DUMMY_MESSAGES.map((messages, index) => {
                    return <Message/>
                })
            }
        </MainContainer>
    );
};

const mapStoreStateToProps = ({chat}) => {
    return {
        ...chat,
    }
}

export default connect(mapStoreStateToProps)(Messages);
