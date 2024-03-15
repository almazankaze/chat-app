import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNavPath } from "../store/navbar/navbar-selector";
import { selectUser } from "../store/user/user-selector";

const NavigateAuth = ({ children }) => {
  const user = useSelector(selectUser);
  const prevPath = useSelector(selectNavPath);

  return !user ? <Navigate to="/auth" /> : <Navigate to={prevPath.prev} />;
};

export default NavigateAuth;
