import React, {useEffect, useState} from 'react';

const AddFriendDialog = ({
                             isDialogOpen,
                             closeDialogHandler,
                             sendFriendInvitaion = () => {
                             }

                         }) => {

    const [mail, setMail] = useState("");
    const [isFormValid, setIsFormValid] = useState("");

    const handleSendInvitation = (invitation) => {
        // send friend request to server
    }

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail("")
    }

    useEffect(() => {
    }, [mail, setIsFormValid])
    return (
        <div>

        </div>
    );
};

export default AddFriendDialog;
