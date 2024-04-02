import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { setIsModalOpen } from "../../store/modal/modal-actions";
import { changeCurrentChat } from "../../store/chat/chat-actions";
import { selectChats } from "../../store/chat/chat-selector";
import { selectUser } from "../../store/user/user-selector";

import Conversation from "../conversation/Conversation";
import "./sidenav.scss";

const SideNav = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const chats = useSelector(selectChats);
  const user = useSelector(selectUser);

  const handleChatChange = (id) => {
    dispatch(changeCurrentChat(id));
  };

  const openModal = () => {
    dispatch(setIsModalOpen(true, "create"));
  };

  return (
    <div className={isMenuOpen ? "sidenav show" : "sidenav"}>
      <div className="sidenav-content">
        <div className="side-chat-header">
          <h3>{user.username}</h3>
          <div className="add-chat-btn" onClick={openModal}>
            +
          </div>
        </div>

        <div className="chat-list-container">
          <div className="chat-list">
            {chats.map((chat) => (
              <div key={chat._id} onClick={() => handleChatChange(chat._id)}>
                <Conversation convo={chat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
