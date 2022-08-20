import React from 'react';
import {styled} from "@mui/material/styles";

const MainContainer = styled("div")({
    height: "50%",
    width: "50%",
    backgroundColor: "black",
    borderRadius: "8px",
})

const VideoEl = styled("video")({
    width: "100%",
    height: "100%",
})

const Video = ({stream, isLocalStream}) => {
    return (
        <MainContainer>
            <VideoEl
                ref={videoRef}
                autoPlay
                muted={isLocalStream ? true : false}
            />
        </MainContainer>
    );
};

export default Video;
