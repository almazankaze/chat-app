import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { selectChats } from "../../store/chat/chat-selector";

import Conversation from "../conversation/Conversation";
import "./sidenav.scss";

const SideNav = () => {
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const chats = useSelector(selectChats);

  return (
    <div className={isMenuOpen ? "sidenav show" : "sidenav"}>
      <div className="sidenav-content">
        <div className="chat-list">
          {chats.map((chat) => (
            <div key={chat._id}>
              <Conversation convo={chat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
