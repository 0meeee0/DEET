import React from "react";

export default function Friends() {
  const friends = ["Nouamane"];

  return (
    <div className="">
      <div className="cntrchat pb-2">Chat</div>
      {
        friends.length > 0? (
      friends?.map((friend, index) => (
        <div className="bg-gray-700 rounded-full w-60 fr my-2 shadow-lg">
          <div className="sum">
            <div key={index} className="friend-container flex items-center">
              <div className="profile-img-container relative">
                <img
                  className="profile-img"
                  src="https://intranet.youcode.ma/storage/users/profile/thumbnail/804-1696616151.jpg"
                  alt="Profile"
                />
                <div className="isOnline absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border border-white"></div>
              </div>
              <div className="profile-info ml-4">
                <h3 className="username text-white">{friend}</h3>
                <span className="last-msg text-gray-400">msg</span>
              </div>
            </div>
          </div>
        </div>
      ))
    ):(<h1 className="flex justify-center my-20">Add Friends To Chat With 🫡</h1>) }
    </div>
  );
}
