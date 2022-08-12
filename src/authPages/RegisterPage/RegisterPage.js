import React, {useState} from 'react';
import AuthBox from "../../shared/components/AuthBox";
import {Typography} from "@mui/material";

const RegisterPage = () => {
    const [mail, setMail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isFormValid, setIsFormValid] = useState(false);
    return (
        <AuthBox>
            <Typography variant="5" sx={{color: 'white'}}>
                Create an account
            </Typography>
        </AuthBox>
    );
};

export default RegisterPage;
