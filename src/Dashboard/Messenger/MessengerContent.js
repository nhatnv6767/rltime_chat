import React, {useEffect} from 'react';
import {styled} from "@mui/material/styles";
import Messenger from "./Messenger";
import NewMessageInput from "./NewMessageInput";

const Wrapper = styled("div")({
    flexGrow: 1,
})

const MessengerContent = ({chosenChatDetails}) => {
    useEffect(() => {
        // TODO
        //fetching chat history from specific user id
    }, [chosenChatDetails])
    return (
        <Wrapper>
            <Messenger/>
            <NewMessageInput/>
        </Wrapper>
    );
};

export default MessengerContent;
