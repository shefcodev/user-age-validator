import React, { useState } from 'react';
import Button from '../UI/Button/Button';

const ErrorModal = () => {
  const [clicked, setClicked] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setClicked(true);
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
