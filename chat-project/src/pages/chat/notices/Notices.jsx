import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectInviteLoading,
} from "../../../store/user/user-selector";
import { deleteInvite } from "../../../store/user/user-actions";
import Button, { BUTTON_TYPE_CLASSES } from "../../../components/button/Button";
import "./notices.scss";

const Notices = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectInviteLoading);

  const handleAccept = () => {};

  const handleDelete = (invite) => {
    const data = {
      chatId: invite,
    };

    dispatch(deleteInvite(data));
  };

  return (
    <div className="container">
      {user.invites ? (
        <>
          {user.invites.map((invite) => (
            <div key={invite} className="invite">
              <h4>Accept invitation to join chat name?</h4>
              <div className="notice-btns">
                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.heroBtn}>
                  Accept
                </Button>
                <Button
                  type="button"
                  buttonType={BUTTON_TYPE_CLASSES.danger}
                  onClick={() => handleDelete(invite)}
                >
                  Decline
                </Button>
              </div>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Notices;
