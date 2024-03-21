import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { setIsMenuOpen } from "../../store/navbar/navbar-actions";
import { getMessages } from "../../store/messages/messages-actions";
import {
  selectMessages,
  selectIsLoading,
} from "../../store/messages/messages-selector";
import { selectUser } from "../../store/user/user-selector";
import { selectCurrentChat } from "../../store/chat/chat-selector";
import Spinner from "../spinner/Spinner";
import InputEmoji from "react-input-emoji";

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./chatbox.scss";

const ChatBox = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const user = useSelector(selectUser);
  const currentChat = useSelector(selectCurrentChat);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = () => {
    setNewMessage(newMessage);
  };

  const toggleIsMenuOpen = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  useEffect(() => {
    if (currentChat !== null) dispatch(getMessages(currentChat));
  }, [dispatch, currentChat]);

  const chat = useSelector(selectMessages);
  const isLoading = useSelector(selectIsLoading);

  if (currentChat === null)
    return (
      <span className="chatbox-empty-message">
        No conversations yet. Try creating one.
      </span>
    );

  return (
    <div
      className={
        isMenuOpen ? "chat-messages-container show" : "chat-messages-container"
      }
    >
      <div className="message-box">
        <div className="message-header">
          <div className="message-title">
            <ArrowBackIcon
              className="chatnav-toggler"
              onClick={toggleIsMenuOpen}
            />
            <h4>{chat?.name}</h4>
          </div>

          <hr />
        </div>
        <div className="message-body">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {chat.messages?.length === 0 ? (
                <span className="chatbox-empty-message">
                  No messages yet...
                </span>
              ) : (
                ""
              )}
              <div className="message">
                <div className="message-text">
                  <span>Hello</span>
                </div>
                <span className="message-from">John</span>
                <span className="message-time">10:12 AM, Today</span>
              </div>

              <div className="message own">
                <div className="message-text">
                  <span>Hello</span>
                </div>
                <span className="message-time">10:12 AM, Today</span>
                <span className="message-from">John</span>
              </div>
            </>
          )}
        </div>
        <div className="message-sender">
          <InputEmoji
            className="message-input"
            theme="dark"
            value={newMessage}
            onChange={handleInputChange}
          />
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.chat}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
