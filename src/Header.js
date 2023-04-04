import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Home,
  NotificationAdd,
  SupervisorAccount,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const logOutOfApp = () => {
        dispatch(logOut())
        auth.signOut();
    }
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt=""
        />
        <div className="header__search">
          {/* search icon */}
          <SearchIcon />
          <input placeholder="Search" type="text" name="" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={NotificationAdd} title="Notificiations" />
        <HeaderOption avatar={true} title='me' onClick={logOutOfApp} />
      </div>
    </div>
  );
}

export default Header;
