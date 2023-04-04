import { Avatar } from "@mui/material";
import "./Sidebar.css";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  console.log(user);

  const recentItem = (topic) => {
    return (
      <>
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
        </div>
      </>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.istockphoto.com/id/1441937460/photo/gradient-red-spray-paint-on-a-white-paper-background.jpg?s=1024x1024&w=is&k=20&c=mRJRYls6omEqRPYl4zkXUf-UjzLdFnxCKHQgOAFtTE4="
          alt=""
          className="sidebar__avatar"
        />
        <Avatar src={user.photoUrl}>{user.email.substr(0, 1)}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
