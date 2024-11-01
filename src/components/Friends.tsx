import React from "react";

export default function Friends() {
  return (
    <div className="">
      <div className="cntrchat pb-2">Chat</div>
      <div className="bg-gray-700 rounded-xl w-60 fr my-2">
        <div className="sum ">
          <div className="profile-img-container">
            <img
              className="profile-img"
              src="https://intranet.youcode.ma/storage/users/profile/thumbnail/804-1696616151.jpg"
              alt="Profile"
            />
            <div className="isOnline"></div>
          </div>
          <div className="profile-info">
            <h3 className="username">Nouamane</h3>
            <span className="status">msg</span>
          </div>
        </div>
      </div>
    </div>
  );
}
