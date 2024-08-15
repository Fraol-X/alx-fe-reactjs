import React, { useContext } from 'react';
import UserContext from './UserContext'; 

const UserProfile = () => {

  const userData = useContext(UserContext); 

  if (!userData) {
    return <div>User data not available</div>;
  }
    return (
      <div>
        <h2>{userData.name}</h2>
        <p>Age: {userData.age}</p>
        <p>Bio: {userData.bio}</p>
      </div>
    );
  };

  export default UserProfile; 