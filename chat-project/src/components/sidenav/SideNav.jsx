import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { getChats } from "../../store/chat/chat-actions";
import { selectChats, selectIsLoading } from "../../store/chat/chat-selector";
import { selectUser } from "../../store/user/user-selector";
import Conversation from "../conversation/Conversation";
import "./sidenav.scss";

const SideNav = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isMenuOpen = useSelector(selectIsMenuOpen);

  useEffect(() => {
    dispatch(getChats(user._id));
  }, [dispatch, user]);

  const chats = useSelector(selectChats);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={isMenuOpen ? "sidenav show" : "sidenav"}>
      {isLoading ? (
        ""
      ) : (
        <div className="sidenav-content">
          <div className="chat-list">
            {chats.map((chat) => (
              <div key={chat._id}>
                <Conversation convo={chat} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
