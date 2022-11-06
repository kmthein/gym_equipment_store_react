import { Button, FormGroup, Label, Input, Form } from "reactstrap";
import useInput from "../hooks/use-input";

const RegisterForm = (props) => {
    const handleRegister = (event) => {
        event.preventDefault();
        alert(`Registration was completed.`);
        userNameReset();
        passwordReset();
        conPasswordReset();
        mobileReset();
        addressReset();
        props.onCloseReg();
        props.onOpenLogin();
    }

    const isNotEmpty = value => value.trim() !== '';
    
    const moreThanFive = value => value.trim().length > 5;

    const validatePassword = value => value.trim() === enteredPassword; 

    const {
        value: enteredUsername,
        isValid: usernameIsValid,
        hasError: usernameHasError,
        inputChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        resetHandler: userNameReset
    } = useInput(isNotEmpty);

    const {
        value: enteredPassword,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        inputChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        resetHandler: passwordReset
    } = useInput(moreThanFive);

    const {
        value: enteredConPassword,
        isValid: conPasswordIsValid,
        hasError: conPasswordHasError,
        inputChangeHandler: conPasswordChangeHandler,
        inputBlurHandler: conPasswordBlurHandler,
        resetHandler: conPasswordReset 
    } = useInput(validatePassword);

    const {
        value: enteredMobile,
        isValid: mobileIsValid,
        hasError: mobileHasError,
        inputChangeHandler: mobileChangeHandler,
        inputBlurHandler: mobileBlurHandler,
        resetHandler: mobileReset
    } = useInput(isNotEmpty);
    
    const {
        value: enteredAddress,
        isValid: addressIsValid,
        hasError: addressHasError,
        inputChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        resetHandler: addressReset
    } = useInput(isNotEmpty);

    let formIsValid = false;
    if (usernameIsValid && passwordIsValid && conPasswordIsValid && mobileIsValid && addressIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    const usernameClasses = usernameHasError ? 'form-invalid' : '';
    const passwordClasses = passwordHasError ? 'form-invalid' : '';
    const conPasswordClasses = conPasswordHasError ? 'form-invalid' : '';
    const mobileClasses = mobileHasError ? 'form-invalid' : '';
    const addressClasses = addressHasError ? 'form-invalid' : '';

    return (
        <>
        <h3>Register Form</h3>
        <Form onSubmit={handleRegister}>
            <FormGroup className={usernameClasses}>
                <Label htmlFor="username">Username</Label>
                <Input type="text" name="name" value={enteredUsername} onChange={usernameChangeHandler} onBlur={usernameBlurHandler} />
                {usernameHasError && <p className="feedback">Please enter a valid username.</p>} 
            </FormGroup>
            <FormGroup className={mobileClasses}>
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input type="number" name="mobile" value={enteredMobile} onChange={mobileChangeHandler} onBlur={mobileBlurHandler} />
                {mobileHasError && <p className="feedback">Please enter a valid mobile number.</p>} 
            </FormGroup>
            <FormGroup className={addressClasses}>
                <Label htmlFor="address">Address</Label>
                <Input type="text" name="address" value={enteredAddress} onChange={addressChangeHandler} onBlur={addressBlurHandler} />
                {addressHasError && <p className="feedback">Please enter a valid address.</p>} 
            </FormGroup>
            <FormGroup className={passwordClasses}>
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordBlurHandler} /> 
                {passwordHasError && <p className="feedback">Password must have more than 5 characters.</p>} 
            </FormGroup>
            <FormGroup className={conPasswordClasses}>
                <Label htmlFor="con-password">Confirm Password</Label>
                <Input type="password" name="con-password" value={enteredConPassword} onChange={conPasswordChangeHandler} onBlur={conPasswordBlurHandler} /> 
                {conPasswordHasError && <p className="feedback">Your confirm password didn't match with password.</p>}
            </FormGroup>
            <Button disabled={!formIsValid} color="primary">Register</Button>
        </Form>
        </>
      );
}
 
export default RegisterForm;