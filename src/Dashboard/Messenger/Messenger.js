import React from 'react';
import {styled} from "@mui/material/styles";
import {connect} from 'react-redux'

const MainContainer = styled("div")({
    flexGrow: 1,
    backgroundColor: "#36393f",
    marginTop: "48px",
    display: "flex",
});

const Messenger = ({chosenChatDetails}) => {
    return (
        <MainContainer>
            {!chosenChatDetails ? (<WelcomeMessage/>) : (<MessengerContent/>)}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({chat}) => {
    return {
        ...chat
    }
}

export default connect(mapStoreStateToProps)(Messenger);

