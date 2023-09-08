import React from 'react';
import Button from '../UI/'

const AddUser = () => {
  return (
    <form>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username' />
      <label htmlFor='age'>Age</label>
      <input type='number' id='age' />
    </form>
  );
};

export default AddUser;
