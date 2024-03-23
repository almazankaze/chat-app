import { useSelector } from "react-redux";
import { selectCurrentChat } from "../../store/chat/chat-selector";

import "./conversation.scss";

const Conversation = ({ convo }) => {
  const currentConvo = useSelector(selectCurrentChat);

  return (
    <>
      <div
        className={
          currentConvo === convo._id ? "conversation active" : "conversation"
        }
      >
        <div className="status-dot"></div>
        <h4>{convo?.name}</h4>
      </div>
    </>
  );
};

export default Conversation;
