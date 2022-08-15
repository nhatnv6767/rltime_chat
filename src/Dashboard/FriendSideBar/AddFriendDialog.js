import React, {useState} from 'react';

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
    return (
        <div>

        </div>
    );
};

export default AddFriendDialog;
