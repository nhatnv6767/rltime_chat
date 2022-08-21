import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton'
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';
import {setScreenSharingStream} from "../../../store/actions/roomActions";
import video from "../Video";

const constraints = {
    audio: false,
    video: true,
}

const ScreenShareButton = ({
                               localStream,
                               screenSharingStream,
                               setScreenSharingStream,
                               isScreenSharingActive,
                           }) => {

    const [isScreenSharingActive1, setIsScreenSharingActive] = useState(false);

    const handleScreenShareToggle = async () => {
        if (!isScreenSharingActive) {
            let stream = null;
            try {
                stream = await navigator.mediaDevices.getDisplayMedia(constraints)
            } catch (err) {
                console.log("Error occurred when trying to get an access to screen share stream")
            }
        }
    }

    return (
        <IconButton
            onClick={handleScreenShareToggle}
            style={{color: 'white'}}
        >
            {
                isScreenSharingActive ? <ScreenShareIcon/> : <StopScreenShareIcon/>
            }
        </IconButton>
    );
};

export default ScreenShareButton;
