import React from 'react';
import './UserProfile.css';

const UserProfile = ({ profile }) => {
  return (
    <div className="user-profile">
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
    </div>
  );
};

export default UserProfile;