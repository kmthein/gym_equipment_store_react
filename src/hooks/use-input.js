import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');

    const [isTouched, setIsTouched] = useState(false);

    const formIsValid = validateValue(enteredValue);

    const hasError = !formIsValid && isTouched;

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const resetHandler = () => {
        setEnteredValue('');
        setIsTouched(false);
    }
    return {
        value: enteredValue,
        isValid: formIsValid,
        hasError,
        isTouched,
        inputChangeHandler,
        inputBlurHandler,
        resetHandler
    }
}

export default useInput;