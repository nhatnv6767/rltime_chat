import React from 'react';
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageInputs = () => {
    return (
        <>
            <InputWithLabel
                value
                setValue
                label="E-mail"
                type="text"
                placeholder="Enter e-mail address"
            />
        </>
    );
};

export default LoginPageInputs;
