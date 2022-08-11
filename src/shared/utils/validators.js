export const validateLoginForm = ({mail, password}) => {
    const isMailValid = true;
    const isPasswordValid = validatePassword();
};

const validatePassword = (password) => {
    return password.length > 6 && password.length < 12;
};