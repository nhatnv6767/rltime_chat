import React, {useState} from 'react';
import {Box, Tooltip, Typography} from "@mui/material";
import Avatar from "../../../shared/components/Avatar";

const PendingInvitationsListItem = ({
                                        id,
                                        username,
                                        mail,
                                        acceptFriendInvitation = () => {
                                        },
                                        rejectFriendInvitation = () => {
                                        },

                                    }) => {
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const handleAcceptInvitaion = () => {
        acceptFriendInvitation({id});
        setButtonsDisabled(true);
    };
    const handleRejectInvitaion = () => {
        rejectFriendInvitation({id});
        setButtonsDisabled(true);
    };
    return (
        <Tooltip
            title={mail}
        >
            <div style={{width: "100%"}}>
                <Box>
                    <Avatar username={username}/>
                    <Typography>{username}</Typography>
                </Box>
            </div>
        </Tooltip>
    );
};

export default PendingInvitationsListItem;
