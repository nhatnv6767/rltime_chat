import React from 'react';
import {styled} from "@mui/material/styles";
import MessagesHeader from "./MessagesHeader"
import {connect} from "react-redux"
import DUMMY_MESSAGES from "./DUMMY_MESSAGES"
import Message from "./Message";

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
                messages.map((message, index) => {

                    /* Checking if the current message is from the same author as the previous message. */
                    const sameAuthor = index > 0
                        && messages[index].author._id === messages[index - 1].author._id

                    const sameDay = index > 0
                        && convertDateToHumanReadable(new Date(message.date))
                        === convertDateToHumanReadable(new Date(message[index - 1].date))

                    return <Message
                        key={message._id}
                        content={message.content}
                        username={message.author.username}
                        sameAuthor={sameAuthor}
                        date={message.date}
                        sameDay={sameDay}
                    />

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
