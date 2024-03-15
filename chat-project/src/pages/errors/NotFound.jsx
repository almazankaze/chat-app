import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";

import "./error.scss";

function NotFound() {
  const navigate = useNavigate();

  const goToHomeHandler = () => {
    navigate("/");
  };

  return (
    <section className="container error-container">
      <div className="error-text-container">
        <h1 className="error-title">404</h1>
        <h2 className="error-message">OOPS! PAGE NOT FOUND</h2>
        <h4 className="error-desc">
          Sorry, the page you're looking for does not exist. If you think
          something is broken, report a problem.
        </h4>
      </div>
      <div className="error-btns">
        <Button type="button" onClick={goToHomeHandler}>
          Go to Home
        </Button>
        <Button type="button" buttonType={BUTTON_TYPE_CLASSES.clear}>
          Contact Us
        </Button>
      </div>
    </section>
  );
}

export default NotFound;
