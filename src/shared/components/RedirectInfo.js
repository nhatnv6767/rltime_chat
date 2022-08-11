import React from 'react';
import {Typography} from "@mui/material";

const RedirectInfo = ({
                          text,
                          redirectText,
                          additionalStyles,
                          redirectHandler,
                      }) => {
    return (
        <Typography
            sx={{color: '#72767d'}}
            style={additionalStyles ? additionalStyles : {}}
            variant="subtitle2"
        >
            {text}

        </Typography>
    );
};

export default RedirectInfo;
