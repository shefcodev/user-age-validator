import React from 'react';

const UserList = ({ userDataList, onAgeError }) => {
  console.log(userDataList);

  return (
    <ul
      className='userlist'
      style={{ display: `${onAgeError ? 'none' : 'block'}` }}
    >
      {userDataList.map((userData, index) => (
        <li key={index}>{userData.username}</li>
      ))}
    </ul>
  );
};

export default UserList;
