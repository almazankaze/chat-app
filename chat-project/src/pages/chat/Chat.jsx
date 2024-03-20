import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { setIsMenuOpen } from "../../store/navbar/navbar-actions";
import InputEmoji from "react-input-emoji";

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import SideNav from "../../components/sidenav/SideNav";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DefaultUserImg from "../../assets/default-user.png";
import "./chat.scss";

const Chat = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = () => {
    setNewMessage(newMessage);
  };

  const toggleIsMenuOpen = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  return (
    <div className="chat-container">
      <div className="chat-main">
        <SideNav />
        <div
          className={
            isMenuOpen
              ? "chat-messages-container show"
              : "chat-messages-container"
          }
        >
          <div className="message-box">
            <div className="message-header">
              <div className="message-title">
                <ArrowBackIcon
                  className="chatnav-toggler"
                  onClick={toggleIsMenuOpen}
                />
                <h4>Header</h4>
              </div>

              <hr />
            </div>
            <div className="message-body">
              <span className="chatbox-empty-message">No messages yet...</span>
              <div className="message">
                <div className="message-profile">
                  <img src={DefaultUserImg} alt={"name"} />
                </div>
                <div className="message-text">
                  <span>Hello</span>
                  <span>01/02/2023</span>
                </div>
              </div>

              <div className="message own">
                <div className="message-text">
                  <span>Hello</span>
                  <span>01/02/2023</span>
                </div>
              </div>
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
      </div>
    </div>
  );
};

export default Chat;
