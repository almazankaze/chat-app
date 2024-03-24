import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../store/chat/chat-actions";
import { selectChatsLoading } from "../../store/chat/chat-selector";
import { selectUser, selectSocket } from "../../store/user/user-selector";
import { addMessage } from "../../store/messages/messages-actions";
import { selectMessages } from "../../store/messages/messages-selector";

import ChatBox from "../../components/chatbox/ChatBox";
import SideNav from "../../components/sidenav/SideNav";
import Spinner from "../../components/spinner/Spinner";

import "./chat.scss";

const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const socket = useSelector(selectSocket);
  const chat = useSelector(selectMessages);
  const chatsLoading = useSelector(selectChatsLoading);

  useEffect(() => {
    dispatch(getChats(user._id));
  }, [dispatch, user]);

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      dispatch(addMessage(newMessage));
    });

    return () => socket?.off("newMessage");
  }, [dispatch, socket, chat.messages]);

  return (
    <div className="chat-container">
      {chatsLoading ? (
        <Spinner />
      ) : (
        <div className="chat-main">
          <SideNav />
          <ChatBox />
        </div>
      )}
    </div>
  );
};

export default Chat;
