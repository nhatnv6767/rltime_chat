import React from 'react';
import {Tooltip} from "@mui/material";

const ActiveRoomButton = ({
                              creatorUsername,
                              roomId,
                              amountOfParticipants,
                              isUserInRoom,
                          }) => {

    const handleJoinActiveRoom = () => {
        if (amountOfParticipants < 4) {
            // join room
        }
    }

    const activeRoomButtonDisabled = amountOfParticipants > 3;
    const roomTitle = `Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`;

    return (
        <Tooltip>

        </Tooltip>
    );
};

export default ActiveRoomButton;
