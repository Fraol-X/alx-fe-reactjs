import { Routes, Route, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import { useAuth } from './useAuth'; 

const Profile = () => {

  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <ul>
          <li><a href="/profile/details">Details</a></li>
          <li><a href="/profile/settings">Settings</a></li>
        </ul>
      </nav>
      <Outlet /> 
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
