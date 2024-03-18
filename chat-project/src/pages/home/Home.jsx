import Button from "../../components/button/Button";
import "./home.scss";

const Home = () => {
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
            <Button type="button">Open in Browser</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
