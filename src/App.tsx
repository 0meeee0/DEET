import { useState } from "react";
import "./App.css";
import Body from "./components/Chat/Body";
import Friends from "./components/Friends/Friends";
import Profile from "./components/Profile/Profile";
import SearchUsers from "./components/Search/SearchUsers";
import SwitchChat from "./components/Chat/SwitchChat";
import Groups from "./components/Groups/Groups";
import AddFriend from "./components/Friends/AddFriend";
import FriendRequest from "./components/Friends/FriendRequest";
import SideProfile from "./components/Profile/SideProfile";
import Login from "./components/Auth/Login";
import AddGroup from "./components/Groups/AddGroup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoCallPage from "./components/Call/VideoCallPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeLink, setActiveLink] = useState("People");

  return (
    <Router>
      <Routes>
        <Route path="/video-call" element={<VideoCallPage />} />
        <Route
          path="/"
          element={
            <div className="main-container">
              {!isAuthenticated ? (
                <Login setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <>
                  <div className="profile-container">
                    <Profile />
                    <SwitchChat
                      activeLink={activeLink}
                      setActiveLink={setActiveLink}
                    />
                    <SearchUsers />
                    {activeLink === "People" ? <Friends /> : <Groups />}
                    <div className="bot">
                      {activeLink === "People" ? (
                        <>
                          <FriendRequest />
                          <AddFriend />
                        </>
                      ) : (
                        <AddGroup />
                      )}
                    </div>
                  </div>
                  <Body />
                  <SideProfile />
                </>
              )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
