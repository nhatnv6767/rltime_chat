import React from 'react';
import {Typography} from "@mui/material";

const ChosenOptionLabel = ({name}) => {
    return (
        <Typography
            sx={{
                fontSize: "16px",
                color: "white",
                fontWeight: "bold",
            }}
        >
            {`${name ? name : ""}`}
        </Typography>
    );
};

export default ChosenOptionLabel;
