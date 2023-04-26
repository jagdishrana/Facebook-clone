import React from "react";
import "./profile.css";
import Topbar from "../../component/topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={`${PF}mobile.png`} alt="" className="profileCoverImg" />
              <img
                src={`${PF}person/kamal.jpg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Kamal</h4>
              <span className="profileInfoDesc">love with plok</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
