import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import {useNavigate} from "react-router-dom";
import {Tooltip} from "@mui/material";

const getFormNotValidMessage = () => {
    return "Enter correct e-mail address and password should contains between 6 and 12 characters";
};
const getFormValidMessage = () => {
    return "Press to log in";
};

const RegisterPageFooter = ({handleLogin, isFormValid}) => {

    const history = useNavigate();
    const handlePushToLoginPage = () => {
        history("/login");
    };


    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
            >
                <div>
                    <CustomPrimaryButton
                        label="Log in"
                        additionalStyles={{marginTop: "30px"}}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text="Need an account? "
                redirectText="Create an account"
                additionalStyles={{marginTop: "5px"}}
                redirectHandler={handlePushToLoginPage}
            />
        </>
    );
};

export default RegisterPageFooter;
