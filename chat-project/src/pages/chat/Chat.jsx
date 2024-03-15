import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user-selector";
import { Outlet, Navigate } from "react-router-dom";
import "./chat.scss";

const Chat = () => {
  const user = useSelector(selectUser);

  return user ? (
    <div>
      Chat
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default Chat;
