import React from 'react';
import {styled} from "@mui/material/styles";
import SideBar from "./SideBar/SideBar";

const Wrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display: "flex",
});

const Dashboard = () => {
    return (
        <Wrapper>
            <SideBar/>
            <FriendSideBar/>
            <Messenger/>
            <AppBar/>
        </Wrapper>
    );
};

export default Dashboard;
