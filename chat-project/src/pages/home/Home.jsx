import { useSelector } from "react-redux";
import {
  selectUser,
  selectUserIsLoading,
} from "../../store/user/user-selector";

import Spinner from "../../components/spinner/Spinner";
import "./home.scss";

const Home = () => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectUserIsLoading);

  if (!user) return <div>LogIn</div>;

  if (isLoading) return <Spinner />;

  return <div>{user.username}</div>;
};

export default Home;
