import React, { useState } from 'react';
import profileImg from '../assets/profile.jpg';
import './ProfileImage.css';

export default function ProfileImage({ className = '' }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`profile-image-container ${className}`}>
      {!imageError ? (
        <img
          src={profileImg}
          alt="Raguveer M"
          className="profile-image"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="profile-placeholder">
          <span className="profile-placeholder-initials">RM</span>
        </div>
      )}
      <div className="profile-glow" aria-hidden="true"></div>
    </div>
  );
}
