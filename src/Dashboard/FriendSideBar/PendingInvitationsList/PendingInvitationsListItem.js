import React, {useState} from 'react';

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
        <div>

        </div>
    );
};

export default PendingInvitationsListItem;
