import React from 'react'

export default function TopSectionChat() {
  return (
    <div className="jam3">
      <div className="sum">
        <div className="profile-img-container">
          <img
            className="profile-img"
            src="https://intranet.youcode.ma/storage/users/profile/thumbnail/804-1696616151.jpg"
            alt="Profile"
          />
          <div className="isOnline"></div>
        </div>
        <div className="profile-info">
          <h3 className="username text-black">Nouamane</h3>
          <span className="status">Online</span>
        </div>
      </div>
      <div className="el"></div>
    </div>
  );
}
