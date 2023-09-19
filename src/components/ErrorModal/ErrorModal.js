import React from 'react';
import Button from '../UI/Button/Button';

const ErrorModal = () => {
  let clicked = false;

  const submitHandler = (event) => {
    event.preventDefault();
    clicked = true;
  };

  return (
    <div className='overlay' style={{ display: `${clicked && 'none'}` }}>
      <form className={'error'} onSubmit={submitHandler}>
        <div className={'invalid'}>
          <h3>Invalid Input</h3>
        </div>
        <p>Please enter a valid and age (non-empty values).</p>
        <Button className={'okay'}>Okay</Button>
      </form>
    </div>
  );
};

export default ErrorModal;
