import React, { useState } from "react";

export default function AddFriend() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [friendName, setFriendName] = useState("");

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddFriend = () => {
    if (friendName) {
      alert(`Friend request sent to ${friendName}`);
      setFriendName("");
      handleModalToggle();
    } else {
      alert("Please enter a name");
    }
  };

  return (
    <>
      <div className="add-friend w-60 text-center shadow-2xl">
        <button
          onClick={handleModalToggle}
          className=""
        >
          Add Friend
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          role="dialog"
          aria-labelledby="add-friend-modal"
        >
          <div className="flex flex-col w-96 bg-[#090c14]/40 backdrop-blur-md rounded-xl p-4 shadow-xl ring-1 ring-white/10 border border-white/20 sm:max-w-lg">
            <div className="flex justify-between items-center py-3 px-4 border-b border-[#cfd7ee]/[.20]">
              <h3 id="add-friend-modal" className="font-bold text-[#cfd7ee]">
                Add a Friend
              </h3>
              <button
                type="button"
                onClick={handleModalToggle}
                className="inline-flex justify-center items-center rounded-full bg-[#cfd7ee] text-gray-800 hover:bg-gray-200 p-2"
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
            <div className="p-4">
              <label className="block text-sm font-medium text-[#cfd7ee]">
                Friend's Name
              </label>
              <input
                type="text"
                value={friendName}
                onChange={(e) => setFriendName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              />
              <div className="mt-4 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={handleModalToggle}
                  className="py-2 px-3 text-sm font-medium rounded-lg bg-gray-500 text-white hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddFriend}
                  className="py-2 px-3 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
