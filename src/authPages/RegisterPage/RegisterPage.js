import React from 'react';
import AuthBox from "../../shared/components/AuthBox";
import {Typography} from "@mui/material";

const RegisterPage = () => {
    return (
        <AuthBox>
            <Typography variant="5" sx={{color: 'white'}}>
                Create an account
            </Typography>
        </AuthBox>
    );
};

export default RegisterPage;
