import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';

const CloseRoomButton = () => {

    const [micEnabled, setMicEnabled] = useState(true);

    const handleLeaveRoom = () => {

    }

    return (
        <IconButton
            onClick={handleToggleMic}
            style={{color: 'white'}}
        >
            {
                micEnabled ? <MicIcon/> : <MicOffIcon/>
            }
        </IconButton>
    );
};

export default CloseRoomButton;
