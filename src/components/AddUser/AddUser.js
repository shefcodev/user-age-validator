import React from 'react';
import Button from '../UI/Button/Button';

const AddUser = () => {
  return (
    <form>
      <label htmlFor='username'>Username</label>
      <input type='text' id='username' className='input' />
      <label htmlFor='age'>Age (Years)</label>
      <input type='number' id='age' className='input' />
      <Button>Add User</Button>
    </form>
  );
};

export default AddUser;
