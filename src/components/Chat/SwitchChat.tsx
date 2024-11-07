import React from "react";

interface SwitchChatProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

export default function SwitchChat({
  activeLink,
  setActiveLink,
}: SwitchChatProps) {
  return (
    <div className="switch-chat cntr">
      <div className="links-container">
        <a
          href="#"
          className={activeLink === "People" ? "active" : ""}
          onClick={() => setActiveLink("People")}
        >
          People
        </a>
        <a
          href="#"
          className={activeLink === "Groups" ? "active" : ""}
          onClick={() => setActiveLink("Groups")}
        >
          Groups
        </a>
      </div>
      <div
        className="underline"
        style={{
          width: "50%",
          left: activeLink === "People" ? "0" : "50%",
        }}
      ></div>
    </div>
  );
}
