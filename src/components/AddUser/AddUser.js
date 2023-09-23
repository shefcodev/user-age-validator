import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import styles from './AddUser.module.css';

let isAge;
const AddUser = ({ getUserData }) => {
  const [inputValues, setInputValues] = useState(null);
  let isEmptyValues = inputValues ? false : true;
  if (inputValues) isAge = +inputValues.age < 0 ? true : false;

  const submitHandler = (event) => {
    event.preventDefault();
    getUserData(inputValues, isEmptyValues, isAge);
  };

  const inputChangeHandler = ({ target: { value, id } }) => {
    setInputValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  console.log(inputValues);

  return (
    <Card>
      <form className={styles.userinput} onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          className={styles.input}
          onChange={inputChangeHandler}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          type='number'
          id='age'
          className={styles.input}
          onChange={inputChangeHandler}
        />
        <Button className={'add-user'}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
