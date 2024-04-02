import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { setIsMenuOpen } from "../../store/navbar/navbar-actions";
import { setIsModalOpen } from "../../store/modal/modal-actions";
import {
  getMessages,
  sendMessage,
} from "../../store/messages/messages-actions";
import {
  selectMessages,
  selectIsLoading,
  selectMessageLoading,
} from "../../store/messages/messages-selector";
import { selectUser } from "../../store/user/user-selector";
import { selectCurrentChat } from "../../store/chat/chat-selector";
import { extractTime } from "../../utils/functions/extractTime";
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

  const handleInputChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  const toggleIsMenuOpen = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!newMessage) return;

    const messageData = {
      chatId: currentChat,
      senderId: user._id,
      text: newMessage,
      senderName: user.username,
    };

    dispatch(sendMessage(messageData));

    setNewMessage("");
  };

  const openModal = () => {
    dispatch(setIsModalOpen(true, "invite"));
  };

  useEffect(() => {
    if (currentChat !== null) dispatch(getMessages(currentChat));
  }, [dispatch, currentChat]);

  const chat = useSelector(selectMessages);
  const isLoading = useSelector(selectIsLoading);
  const scroll = useRef();
  const messageLoading = useSelector(selectMessageLoading);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.messages]);

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
          <div className="message-title-container">
            <div className="message-title">
              <ArrowBackIcon
                className="chatnav-toggler"
                onClick={toggleIsMenuOpen}
              />
              <h4>{chat?.name}</h4>
            </div>

            {chat.creator === user._id ? (
              <div className="invite-btn" onClick={openModal}>
                +
              </div>
            ) : (
              ""
            )}
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
                <>
                  {chat.messages?.map((message) => (
                    <div
                      ref={scroll}
                      key={message._id}
                      className={
                        message.senderId === user._id
                          ? "message own"
                          : "message"
                      }
                    >
                      <div className="message-text">
                        <span>{message.text}</span>
                      </div>
                      <span className="message-from">{message.senderName}</span>
                      <span className="message-time">
                        {extractTime(message.createdAt)}
                      </span>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
        <form className="message-sender" onSubmit={handleSend}>
          <InputEmoji
            className="message-input"
            theme="dark"
            value={newMessage}
            maxLength={255}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            buttonType={BUTTON_TYPE_CLASSES.chat}
            isLoading={messageLoading}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
