import React, { useContext } from 'react';
import UserContext from './UserContext';

function ProfilePage() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default ProfilePage;
