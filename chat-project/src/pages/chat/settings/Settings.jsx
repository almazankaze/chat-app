import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser, selectSocket } from "../../../store/user/user-selector";
import { logout } from "../../../store/user/user-actions";
import Button, { BUTTON_TYPE_CLASSES } from "../../../components/button/Button";
import profile from "../../../assets/default-user.png";
import "./settings.scss";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const socket = useSelector(selectSocket);

  const signMeOut = async () => {
    dispatch(logout()).then(() => {
      socket.close();
      navigate("/auth");
    });
  };

  return (
    <div className="container">
      <div className="settings-editor">
        <div className="settings-photo">
          <img src={profile} alt="profile" />
        </div>
        <h4>{user.username}</h4>
        <div className="settings-btns">
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.heroBtn}>
            Change Picture
          </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.heroBtn}>
            Change Password
          </Button>
        </div>
      </div>
      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.form}
        onClick={signMeOut}
      >
        Logout
      </Button>
    </div>
  );
};

export default Settings;
