import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { APP_PATH } from "../../utils/paths/paths";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(APP_PATH.chatRoot);
  };

  return (
    <div className="container home">
      <div className="home-hero-section">
        <div className="home-hero-content">
          <h1 className="home-title">Where conversations come alive!</h1>
          <h4 className="home-desc">
            Whether you're a seasoned chatter or new to the chat scene, ChatCord
            has something for everyone. Start chatting today and let the
            conversations begin!
          </h4>

          <div className="home-btns">
            <Button type="button">Download Now</Button>
            <Button type="button" onClick={handleClick}>
              Open in Browser
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
