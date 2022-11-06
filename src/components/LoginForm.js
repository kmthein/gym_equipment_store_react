import React from 'react';
import { useState } from 'react';
import { Button, FormGroup, Label, Input, Form } from "reactstrap";
import useInput from '../hooks/use-input';

const LoginForm = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        alert(`
        Username- ${enteredUsername}
        Password- ${enteredPassword}
        `)
        userNameReset();
        passwordReset();
        props.onCloseLogin();
      };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };

    const isNotEmpty = value => value.trim() !== '';
    
    const moreThanFive = value => value.trim().length > 5;

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

    let formIsValid = false;
    if (usernameIsValid && passwordIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    const usernameClasses = usernameHasError ? 'form-invalid' : '';
    const passwordClasses = passwordHasError ? 'form-invalid' : '';

    return (
        <>
        <h3>Login Form</h3>
          <Form onSubmit={handleLogin}>
            <FormGroup className={usernameClasses}>
              <Label htmlFor="username">Username</Label>
              <Input type="text" name="username" id="username" value={enteredUsername} onChange={usernameChangeHandler} onBlur={usernameBlurHandler} />
              {usernameHasError && <p className='feedback'>Username must not be empty.</p> }
            </FormGroup>
            <FormGroup className={passwordClasses}>
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordBlurHandler} />
              {passwordHasError && <p className='feedback'>Password must have more than 5 characters.</p>}
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember" />
                Remember me
              </Label>
            </FormGroup>
            <Button disabled={!formIsValid} type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
          </>
      );
}
 
export default LoginForm;