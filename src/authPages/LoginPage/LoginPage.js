import React, {useEffect, useState} from 'react';
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";

const LoginPage = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
    }, [mail, password, setIsFormValid]);
    const handleLogin = () => {
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

export default LoginPage;
