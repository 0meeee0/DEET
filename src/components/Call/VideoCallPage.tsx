import React from "react";

export default function VideoCallPage() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center w-full">
      <div className="flex gap-4 mb-8">
        <div className="w-64 h-40 bg-black flex items-center justify-center text-white text-sm">
          Your Video
        </div>
        <div className="w-64 h-40 bg-black flex items-center justify-center text-white text-sm">
          Other Participant
        </div>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md">
          Mute
        </button>
        <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md">
          End Call
        </button>
      </div>
    </div>
  );
}
