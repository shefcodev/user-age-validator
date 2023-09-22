import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
import ErrorModal from './components/ErrorModal/ErrorModal';

const userDataList = [];
// let isAge;

const App = () => {
  const [userData, setUserData] = useState(null);
  const [emptyInput, setEmptyInput] = useState(false);
  const [isAgeNegative, setIsAgeNegative] = useState(false);

  const getUserData = (values, isEmpty, isAge) => {
    setUserData(values);
    setEmptyInput(isEmpty);
    setIsAgeNegative(isAge);
  };

  if (userData && userData.username && +userData.age > 0) {
    userDataList.push(userData);
  }

  // if (userData) {
  //   isAge = userData.age < 0 ? true : false;
  // }

  return (
    <div>
      <AddUser getUserData={getUserData} />
      {userDataList.length && (
        <UserList
          userDataList={userDataList}
          onAgeError={isAgeNegative}
          emptyInputError={emptyInput}
        />
      )}
      {(isAgeNegative || emptyInput) && (
        <ErrorModal isAge={isAgeNegative} emptyInput={emptyInput} />
      )}
    </div>
  );
};

export default App;
