import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import SearchUsers from "./components/SearchUsers";
import SwitchChat from "./components/SwitchChat";
import Groups from "./components/Groups";
import AddFriend from "./components/AddFriend";
import FriendRequest from "./components/FriendRequest";

function App() {
  const [activeLink, setActiveLink] = useState("People");

  return (
    <>
      <div className="main-container">
        <div className="profile-container">
          <Profile />
          <SwitchChat activeLink={activeLink} setActiveLink={setActiveLink} />
          <SearchUsers />
          {activeLink === "People"? <Friends />: <Groups/>}
          <div className="bot">
            <FriendRequest/>
          <AddFriend/>
          </div>
        </div>
        <Body />
      </div>
    </>
  );
}

export default App;
