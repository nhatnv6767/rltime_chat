import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import {useNavigate} from "react-router-dom";
import {Tooltip} from "@mui/material";


const LoginPageFooter = ({handleLogin, isFormValid}) => {

    const history = useNavigate();
    const handlePushToRegisterPage = () => {
        history("/register");
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
                redirectHandler={handlePushToRegisterPage}
            />
        </>
    );
};

export default LoginPageFooter;
