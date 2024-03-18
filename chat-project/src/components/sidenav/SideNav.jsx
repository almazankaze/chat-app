import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../store/chat/chat-actions";
import { selectChats, selectIsLoading } from "../../store/chat/chat-selector";
import { selectUser } from "../../store/user/user-selector";
import "./sidenav.scss";

const SideNav = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getChats(user._id));
  }, [dispatch, user]);

  const chats = useSelector(selectChats);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="sidenav">
      {isLoading ? (
        ""
      ) : (
        <div className="sidenav-content">
          <div className="chat-list">
            {chats.map((chat) => (
              <div key={chat._id}>chat</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
