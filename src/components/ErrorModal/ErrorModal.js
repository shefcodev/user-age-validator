import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

const ErrorModal = ({ isAge }) => {
  const [clicked, setClicked] = useState(false);
  const [clickedOverlay, setClickedOverlay] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setClicked(true);
  };

  const clickHandler = ({ target: { id } }) => {
    if (id === 'overlay') {
      setClickedOverlay(true);
    }
  };

  return (
    <div
      className={'overlay'}
      onClick={clickHandler}
      id={'overlay'}
      style={{ display: `${(clicked || clickedOverlay) && 'none'}` }}
    >
      <Card>
        <form className={'error'} onSubmit={submitHandler}>
          <div className={'invalid'}>
            <h3>Invalid Input</h3>
          </div>
          <p>
            {isAge
              ? 'Please enter a postive age.'
              : 'Please enter a valid and age (non-empty values).'}
          </p>
          <Button className={'okay'}>Okay</Button>
        </form>
      </Card>
    </div>
  );
};

export default ErrorModal;
