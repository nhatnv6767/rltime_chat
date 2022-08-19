import React from 'react';
import {styled} from "@mui/material/styles";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";
import {connect} from 'react-redux';

const MainContainer = styled("div")({
    width: "72px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#202225"
});

const SideBar = () => {
    return (
        <MainContainer>
            <MainPageButton/>
            <CreateRoomButton/>
        </MainContainer>
    );
};

const mapStoreStateToProps = ({room}) => {
    return {
        ...room,
    }
}

export default connect(mapStoreStateToProps)(SideBar);
