import React from 'react';
import {styled} from "@mui/material/styles";
import MessagesHeader from "./MessagesHeader"
import {connect} from "react-redux"


const Messages = ({chosenChatDetails, messages}) => {
    return (
        <div>

        </div>
    );
};

const mapStoreStateToProps = ({chat}) => {
    return {
        ...chat,
    }
}

export default connect(mapStoreStateToProps)(Messages);
