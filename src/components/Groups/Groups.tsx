import React from "react";

const groups = ["JS Pirates", "Silk Road"];
export default function Groups() {
  return (
    <div className="">
      {groups.map((index: any): any => (
        <div
          key={index}
          className="bg-gray-700 rounded-xl w-60 fr my-2 shadow-2xl"
        >
          <div className="sum ">
            <div className="profile-info">
              <h3 className="username">{index}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
