import React from 'react';
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import {Box, IconButton} from "@mui/material";
import {styled} from "@mui/material/styles";

const InvitationDecisionButtons = ({disabled, acceptInvitationHandler}) => {
    return (
        <Box sx={{display: 'flex'}}>
            <IconButton
                style={{color: 'white'}}
                disabled={disabled}
                onClick={acceptInvitationHandler}
            >
                <CheckIcon/>
            </IconButton>
        </Box>
    );
};

export default InvitationDecisionButtons;
