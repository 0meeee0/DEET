import React from "react";

const groups = ["Group 1", "Group 2"];
export default function Groups() {
  return (
    <div className="">
      {groups.map((index: any, val: any): any => (
        <div key={index} className="bg-gray-700 rounded-xl w-60 fr my-2">
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
