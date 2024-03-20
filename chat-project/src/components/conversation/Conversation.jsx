import "./conversation.scss";

const Conversation = ({ convo }) => {
  return (
    <>
      <div className="conversation">
        <div className="status-dot"></div>
        <h4>{convo?.name}</h4>
      </div>
    </>
  );
};

export default Conversation;
