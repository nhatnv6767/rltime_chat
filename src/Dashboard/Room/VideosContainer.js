import React from 'react';
import {styled} from "@mui/material/styles";
import {connect} from "react-redux"

const MainContainer = styled("div")({
    height: "85%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
})

const VideosContainer = () => {
    return (
        <MainContainer>
        </MainContainer>
    );
};

const mapStoreStateToProps = ({room}) => {
    return {
        ...room,
    }
}

export default connect(mapStoreStateToProps)(VideosContainer);
