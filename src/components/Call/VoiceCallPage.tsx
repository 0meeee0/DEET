import {
  PhoneArrowUpRightIcon,
  PhoneXMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function VoiceCallPage() {
  const [callStatus, setCallStatus] = useState("incoming"); // 'incoming, acceptef, declined'

  const handleAccept = () => {
    setCallStatus("accepted");
  };

  const handleDecline = () => {
    setCallStatus("declined");
  };

  if (callStatus === "declined") return null

  return (
    <div className="call-popup flex flex-col w-36 items-center rounded-3xl p-4">
      <img
        className="rounded-full w-20 mb-3 shadow-xl"
        src="https://intranet.youcode.ma/storage/users/profile/731-1696615266.jpg"
        alt="User profile picture"
      />
      <h2 className="text-gray-300">Caller</h2>
      <div className="flex gap-x-4 m2-5">
        {callStatus === "incoming" && (
          <>
            <div
              className="bg-blue-500 rounded-full p-2 cursor-pointer"
              onClick={handleAccept}
            >
              <PhoneArrowUpRightIcon className="text-white h-6 w-6" />
            </div>
            <div
              className="bg-gray-500 rounded-full p-2 cursor-pointer"
              onClick={handleDecline}
            >
              <PhoneXMarkIcon className="text-white h-6 w-6" />
            </div>
          </>
        )}
        {callStatus === "accepted" && (
          <div
            className="bg-red-500 rounded-full p-2 cursor-pointer"
            onClick={handleDecline}
          >
            <PhoneXMarkIcon className="text-white h-6 w-6" />
          </div>
        )}
      </div>
    </div>
  );
}
