import React from "react";
import "./closeFriends.css";
export default function CloseFriends({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF + user.profilePicture} alt="" />
      <span className="sidebarfriendName">{user.username}</span>
    </li>
  );
}
