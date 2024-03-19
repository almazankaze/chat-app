import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/user/user-selector";
import { APP_PATH } from "../../../utils/paths/paths";
import { Outlet, Navigate } from "react-router-dom";

import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./chatnav.scss";

const ChatNav = () => {
  const [activeLink, setActiveLink] = useState(0);
  const user = useSelector(selectUser);

  return user ? (
    <Fragment>
      <div className="chatnav-icons">
        <Link
          to={APP_PATH.chatRoot}
          className="chatnav-link"
          onClick={() => setActiveLink(0)}
        >
          <ChatBubbleIcon
            className={
              activeLink === 0
                ? "chatnav-icon chatnav-icon-active"
                : "chatnav-icon"
            }
          />
        </Link>
        <Link
          to={APP_PATH.chat.notification}
          className="chatnav-link"
          onClick={() => setActiveLink(1)}
        >
          <NotificationsIcon
            className={
              activeLink === 1
                ? "chatnav-icon chatnav-icon-active"
                : "chatnav-icon"
            }
          />
        </Link>
        <Link
          to={APP_PATH.chat.settings}
          className="chatnav-link"
          onClick={() => setActiveLink(2)}
        >
          <SettingsIcon
            className={
              activeLink === 2
                ? "chatnav-icon chatnav-icon-active"
                : "chatnav-icon"
            }
          />
        </Link>
      </div>

      <Outlet />
    </Fragment>
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default ChatNav;
