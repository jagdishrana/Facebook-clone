import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../DammyData";
export default function feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((e) => (
          <Post key={e.id} post={e} />
        ))}
      </div>
    </div>
  );
}
