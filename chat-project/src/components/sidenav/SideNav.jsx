import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { changeCurrentChat } from "../../store/chat/chat-actions";
import { selectChats } from "../../store/chat/chat-selector";

import Conversation from "../conversation/Conversation";
import "./sidenav.scss";

const SideNav = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const chats = useSelector(selectChats);

  const handleChatChange = (id) => {
    dispatch(changeCurrentChat(id));
  };

  return (
    <div className={isMenuOpen ? "sidenav show" : "sidenav"}>
      <div className="sidenav-content">
        <div className="chat-list">
          {chats.map((chat) => (
            <div key={chat._id} onClick={() => handleChatChange(chat._id)}>
              <Conversation convo={chat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
