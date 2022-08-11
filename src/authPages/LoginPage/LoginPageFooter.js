import React from 'react';
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";

const LoginPageFooter = ({handleLogin, isFormValid}) => {
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
            <RedirectInfo/>
        </>
    );
};

export default LoginPageFooter;
