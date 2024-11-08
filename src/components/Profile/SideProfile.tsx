import React from "react";

export default function SideProfile() {
  return (
    <div className="w-60 p-6 bg-[#090C14] rounded-3xl shadow-lg flex flex-col items-center text-white border-2 border-[#5d667e]">
      <div className="mb-4">
        <img
          src="https://intranet.youcode.ma/storage/users/profile/thumbnail/804-1696616151.jpg"
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-100">Nouamane Ait Sfia</h2>
        <p className="text-[#5d667e] text-sm">Online</p>
        <p className="mt-2 text-sm text-gray-200">YouCode A2 JavaScript</p>
      </div>

      <div className="mt-4 w-full flex space-x-4">
        <button className="w-1/2 p-2 bg-[#5d667e] text-[#090C14] rounded-lg hover:bg-[#99aadc] text-sm">
          Delete Chat
        </button>

        <button className="w-1/2 p-2 bg-[#5d667e] text-[#090C14] rounded-lg hover:bg-[#99aadc] text-sm">
          Unfriend
        </button>
      </div>

      <div className="mt-6 w-full text-center">
        <p className="text-[#cfd7ee] text-sm font-semibold mb-2">
          Groups in Common
        </p>
        <div className="text-gray-200 text-sm mt-2">
          <ul className="space-y-2">
            <li className="border-x-4 border-[#5d667e] pl-2">JS Pirates</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
