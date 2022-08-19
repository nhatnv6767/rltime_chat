import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import IconButton from '@mui/material/IconButton'
import VideocamIcon from "@mui/icons-material/Videocam"
import VideocamOffIcon from "@mui/icons-material/VideocamOff"

const CameraButton = () => {

    const [cameraEnabled, setCameraEnabled] = useState(true);

    const handleToggleCamera = () => {
        setCameraEnabled(!cameraEnabled);
    }

    return (
        <IconButton>

        </IconButton>
    );
};

export default CameraButton;
