import React, { useState } from "react";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImg, setProfileImg] = useState(
    "https://i1.sndcdn.com/artworks-k7y07eudhuPfgcUO-Qni8Ww-t500x500.jpg"
  );
  const [name, setName] = useState("Mehdi");

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      <div className="sum">
        <div className="profile-img-container">
          <img className="profile-img" src={profileImg} alt="Profile" />
          <div className="isOnline"></div>
        </div>
        <div className="profile-info">
          <h3 className="username">{name}</h3>
          <span className="status">Online</span>
        </div>

        <span
          onClick={handleModalToggle}
          className="more-settings"
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
          aria-controls="hs-custom-backdrop-modal"
        >
          ⋮
        </span>
      </div>

      {/* modal */}
      {isModalOpen && (
        <div
          id="hs-custom-backdrop-modal"
          className="hs-overlay hs-overlay-backdrop-open:bg-blue-950/90 fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          role="dialog"
          aria-labelledby="hs-custom-backdrop-label"
        >
          <div className="flex flex-col isolate aspect-video w-96 rounded-xl bg-[rgba(42, 66, 110)]/20 shadow-lg ring-1 ring-black/5 border  pointer-events-auto sm:max-w-lg sm:w-full">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3
                id="hs-custom-backdrop-label"
                className="font-bold text-gray-800"
              >
                Profile Settings
              </h3>
              <button
                type="button"
                onClick={handleModalToggle}
                className="inline-flex justify-center items-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 p-2"
                aria-label="Close"
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <div className="flex flex-col items-center">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-24 h-24 rounded-full cursor-pointer mb-4"
                />
                <input type="file" accept="image/*" className="mt-2" />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea className="mt-1 block w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium rounded-lg border bg-white text-gray-800 hover:bg-gray-50"
              >
                Logout
              </button>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
