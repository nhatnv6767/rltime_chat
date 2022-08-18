import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {connect} from "react-redux";


const NewMessageInput = ({chosenChatDetails}) => {
    const [message, setMessage] = useState("")
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

export default connect(mapStoreStateToProps)(NewMessageInput);
