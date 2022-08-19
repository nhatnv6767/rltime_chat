import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import IconButton from '@mui/material/IconButton'
import MicIcon from "@mui/icons-material/Mic"
import MicOffIcon from '@mui/icons-material/MicOff';

const MicButton = () => {

    const [micEnabled, setMicEnabled] = useState(true);

    const handleToggleMic = () => {
        setMicEnabled(!micEnabled);
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

export default MicButton;
