import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user-selector";

const NavigateAuth = ({ children }) => {
  const user = useSelector(selectUser);

  return !user ? <Navigate to="/auth" /> : children;
};

export default NavigateAuth;
