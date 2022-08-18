import React from 'react';
import {styled} from "@mui/material/styles";
import Avatar from "../../../shared/components/Avatar";
import {Typography} from "@mui/material";

const MainContainer = styled("div")({
    width: "97%",
    display: "flex",
    marginTop: "10px",
})

const AvatarContainer = styled("div")({
    width: "70px",
})

const MessageContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
})

const MessageContent = styled("div")({
    color: "#DCDDDE"
})

const SameAuthorMessageContent = styled("div")({
    color: "#DCDDDE",
    width: "97%"
})

const SameAuthorMessageText = styled("span")({
    marginLeft: "70px",
})

const Message = ({content, sameAuthor, username, date, sameDay}) => {
    if (sameAuthor && sameDay) {
        return (
            <SameAuthorMessageContent>
                <SameAuthorMessageText>{content}</SameAuthorMessageText>
            </SameAuthorMessageContent>
        )
    }
    return (
        <MainContainer>
        </MainContainer>
    );
};

export default Message;
