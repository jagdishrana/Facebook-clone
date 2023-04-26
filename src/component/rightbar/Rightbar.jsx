import React from "react";
import "./rightbar.css";
import { Users } from "../../DammyData";
import Online from "../online/Online";
export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        {" "}
        <div className="birthdayContainer">
          <img src="/assets/birthday.png" alt="" className="birthdayImg" />
          <span className="brithdayText">
            <b>Pawan </b>
            and <b>3 other friend </b>have birthday today
          </span>
        </div>
        <img src="/assets/samsung.png" alt="" className="rightbarAdd" />
        <h4 className="rightbarTittle">Online Friends List</h4>
        <ul className="rightbarfriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information Tittle</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Lucknow</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Kalyanpur</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/xender.jpeg`}
              alt=""
              className="rightbarFollowingIMg"
            />
            <span className="rightbarFollowingName">Xender</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/kamal.jpg`}
              alt=""
              className="rightbarFollowingIMg"
            />
            <span className="rightbarFollowingName">Kamal</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/leh.jpeg`}
              alt=""
              className="rightbarFollowingIMg"
            />
            <span className="rightbarFollowingName">Leh Gotti</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/no.jpeg`}
              e
              alt=""
              className="rightbarFollowingIMg"
            />
            <span className="rightbarFollowingName">Roads</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/dani.jpeg`}
              alt=""
              className="rightbarFollowingIMg"
            />
            <span className="rightbarFollowingName">Daniel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/pawan.jpg`}
              alt=""
              className="rightbarFollowingIMg"
            />
            <span className="rightbarFollowingName">Pawan</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
