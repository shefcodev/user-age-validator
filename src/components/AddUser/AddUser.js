import React, { useState } from 'react';
import Button from '../UI/Button/Button';

const AddUser = ({ getUserData }) => {
  const [inputValues, setInputValues] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    getUserData(inputValues);
  };

  const inputChangeHandler = ({ target: { value, id } }) => {
    setInputValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  return (
    <form className={'userinput'} onSubmit={submitHandler}>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        id='username'
        className='input'
        onChange={inputChangeHandler}
      />
      <label htmlFor='age'>Age (Years)</label>
      <input
        type='number'
        id='age'
        className='input'
        onChange={inputChangeHandler}
      />
      <Button className={'add-user'}>Add User</Button>
    </form>
  );
};

export default AddUser;
