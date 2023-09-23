import React from 'react';
import styles from './UserList.module.css';

const UserList = ({ userDataList, onAgeError, emptyInputError }) => {
  console.log(userDataList);

  return (
    <ul
      className={styles.userlist}
      style={{ display: `${onAgeError || emptyInputError ? 'none' : 'block'}` }}
    >
      {userDataList.map((userData, index) => (
        <li
          key={index}
        >{`${userData.username} (${userData.age} years old)`}</li>
      ))}
    </ul>
  );
};

export default UserList;
