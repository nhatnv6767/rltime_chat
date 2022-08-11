import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";

const LoginPageFooter = ({handleLogin, isFormValid}) => {

    const handlePushToRegisterPage = () => {

    }
    return (
        <>
            <div>
                <CustomPrimaryButton
                    label="Log in"
                    additionalStyles={{marginTop: "30px"}}
                    disabled={!isFormValid}
                    onClick={handleLogin}
                />
            </div>
            <RedirectInfo
                text="Need an account?"
                redirectText="Create an account"
                additionalStyles={{marginTop: "5px"}}
                redirectHandler={handlePushToRegisterPage}
            />
        </>
    );
};

export default LoginPageFooter;
