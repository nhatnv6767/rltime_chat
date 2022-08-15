import React, {useState} from 'react';

const AddFriendDialog = ({
                             isDialogOpen,
                             closeDialogHandler,
                             sendFriendInvitaion = () => {
                             }

                         }) => {

    const [mail, setMail] = useState("")
    return (
        <div>

        </div>
    );
};

export default AddFriendDialog;
