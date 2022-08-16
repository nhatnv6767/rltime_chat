import React, {useEffect, useState} from 'react';
import {validateMail} from "../../shared/utils/validators";
import {Dialog} from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContext from "@mui/material/DialogContentText";
import {DialogTitle, Typography} from "@mui/material";

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
    };

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail("");
    };

    useEffect(() => {
        setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid]);
    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>
                        Invite a Friend
                    </Typography>
                </DialogTitle>
            </Dialog>
        </div>
    );
};

export default AddFriendDialog;
