import React, { useState } from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import Profile from "./Profile";
import SwitchChat from "../Chat/SwitchChat";
import SearchUsers from "../Search/SearchUsers";
import Friends from "../Friends/Friends";
import Groups from "../Groups/Groups";
import FriendRequest from "../Friends/FriendRequest";
import AddFriend from "../Friends/AddFriend";
import Body from "../Chat/Body";
import SideProfile from "./SideProfile";

export default function ProfileContainer() {
  const [activeLink, setActiveLink] = useState("People");

  return (
    <>
      <div className="profile-container">
        <Profile />
        <SwitchChat activeLink={activeLink} setActiveLink={setActiveLink} />
        <SearchUsers />
        {activeLink === "People" ? <Friends /> : <Groups />}
        <div className="bot">
          <FriendRequest />
          <AddFriend />
        </div>
      </div>

      {/* This is where the nested routes will be rendered */}
      <Outlet />

      <SideProfile />
    </>
  );
}
