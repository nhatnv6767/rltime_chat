import React, {useEffect, useState} from 'react';
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";
import {validateLoginForm} from "../../shared/utils/validators";
import {connect} from "react-redux";
import {getActions} from "../../store/actions/authActions";

const LoginPage = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateLoginForm({mail, password}));
    }, [mail, password, setIsFormValid]);
    const handleLogin = () => {
        console.log(mail);
        console.log(password);
        console.log("Login in");
    };
    return (
        <AuthBox>
            <LoginPageHeader/>
            <LoginPageInputs
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}
            />
            <LoginPageFooter
                isFormValid={isFormValid}
                handleLogin={handleLogin}
            />
        </AuthBox>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    };
};

export default LoginPage;
