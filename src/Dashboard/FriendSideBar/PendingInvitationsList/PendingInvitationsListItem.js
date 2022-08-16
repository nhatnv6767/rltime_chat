import React, {useState} from 'react';
import {Tooltip} from "@mui/material";

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

        </Tooltip>
    );
};

export default PendingInvitationsListItem;
