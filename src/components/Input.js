import React from 'react';

const Input = React.forwardRef((props, ref) => {
    return (
        <div>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} style={{marginLeft: '1%', padding: '2px'}} />
        </div>
      );
});
 
export default Input;