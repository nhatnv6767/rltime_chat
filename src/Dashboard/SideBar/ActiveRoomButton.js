import React from 'react';
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";

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
        <Tooltip
            title={roomTitle}
        >
            <div>
                <Button
                    disabled={activeRoomButtonDisabled || isUserInRoom}
                    onClick={handleJoinActiveRoom}
                >
                </Button>
            </div>
        </Tooltip>
    );
};

export default ActiveRoomButton;
