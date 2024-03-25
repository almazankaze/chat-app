import Button, { BUTTON_TYPE_CLASSES } from "../../../components/button/Button";
import "./notices.scss";

const Notices = () => {
  return (
    <div className="container">
      <div className="invite">
        <h4>Accept invitation to join chat name?</h4>
        <div className="notice-btns">
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.heroBtn}>
            Accept
          </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.danger}>
            Decline
          </Button>
        </div>
      </div>
      <div className="invite">
        <h4>Accept invitation to join chat name?</h4>
        <div className="notice-btns">
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.heroBtn}>
            Accept
          </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.danger}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notices;
