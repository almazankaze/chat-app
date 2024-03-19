import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../store/navbar/navbar-selector";
import { setIsMenuOpen } from "../../store/navbar/navbar-actions";
import InputEmoji from "react-input-emoji";

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/Button";
import SideNav from "../../components/sidenav/SideNav";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./chat.scss";

const Chat = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = () => {
    setNewMessage(newMessage);
  };

  const toggleIsMenuOpen = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  return (
    <div className="container chat-container">
      <div className="chat-main">
        <SideNav />
        <div
          className={
            isMenuOpen
              ? "chat-messages-container show"
              : "chat-messages-container"
          }
        >
          <div className="message-box">
            <div className="message-header">
              <div className="message-title">
                <ArrowBackIcon
                  className="chatnav-toggler"
                  onClick={toggleIsMenuOpen}
                />
                <h4>Header</h4>
              </div>

              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #fff",
                  marginTop: "20px",
                }}
              />
            </div>
            <div className="message-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem
              veritatis quaerat aspernatur at exercitationem? Delectus saepe ea
              soluta, praesentium, voluptatum cupiditate debitis repellat
              laborum iste, consequatur quasi expedita atque. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Aperiam qui soluta cum amet
              dicta tenetur unde voluptatem illum, modi, id quibusdam sunt et
              quis nesciunt explicabo ea totam cupiditate vero. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ad autem veritatis
              quaerat aspernatur at exercitationem? Delectus saepe ea soluta,
              praesentium, voluptatum cupiditate debitis repellat laborum iste,
              consequatur quasi expedita atque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam qui soluta cum amet dicta
              tenetur unde voluptatem illum, modi, id quibusdam sunt et quis
              nesciunt explicabo ea totam cupiditate vero. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ad autem veritatis quaerat
              aspernatur at exercitationem? Delectus saepe ea soluta,
              praesentium, voluptatum cupiditate debitis repellat laborum iste,
              consequatur quasi expedita atque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam qui soluta cum amet dicta
              tenetur unde voluptatem illum, modi, id quibusdam sunt et quis
              nesciunt explicabo ea totam cupiditate vero. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ad autem veritatis quaerat
              aspernatur at exercitationem? Delectus saepe ea soluta,
              praesentium, voluptatum cupiditate debitis repellat laborum iste,
              consequatur quasi expedita atque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam qui soluta cum amet dicta
              tenetur unde voluptatem illum, modi, id quibusdam sunt et quis
              nesciunt explicabo ea totam cupiditate vero. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ad autem veritatis quaerat
              aspernatur at exercitationem? Delectus saepe ea soluta,
              praesentium, voluptatum cupiditate debitis repellat laborum iste,
              consequatur quasi expedita atque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam qui soluta cum amet dicta
              tenetur unde voluptatem illum, modi, id quibusdam sunt et quis
              nesciunt explicabo ea totam cupiditate vero. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ad autem veritatis quaerat
              aspernatur at exercitationem? Delectus saepe ea soluta,
              praesentium, voluptatum cupiditate debitis repellat laborum iste,
              consequatur quasi expedita atque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam qui soluta cum amet dicta
              tenetur unde voluptatem illum, modi, id quibusdam sunt et quis
              nesciunt explicabo ea totam cupiditate vero. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ad autem veritatis quaerat
              aspernatur at exercitationem? Delectus saepe ea soluta,
              praesentium, voluptatum cupiditate debitis repellat laborum iste,
              consequatur quasi expedita atque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam qui soluta cum amet dicta
              tenetur unde voluptatem illum, modi, id quibusdam sunt et quis
              nesciunt explicabo ea totam cupiditate vero. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ad autem veritatis quaerat
              aspernatur at exercitationem? Delectus saepe ea soluta,
              praesentium, voluptatum cupiditate debitis repellat laborum iste,
              consequatur quasi expedita atque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam qui soluta cum amet dicta
              tenetur unde voluptatem illum, modi, id quibusdam sunt et quis
              nesciunt explicabo ea totam cupiditate vero. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ad autem veritatis quaerat
              aspernatur at exercitationem? Delectus saepe ea soluta,
              praesentium, voluptatum cupiditate debitis repellat laborum iste,
              consequatur quasi expedita atque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aperiam qui soluta cum amet dicta
              tenetur unde voluptatem illum, modi, id quibusdam sunt et quis
              nesciunt explicabo ea totam cupiditate vero.
            </div>
            <div className="message-sender">
              <div>+</div>
              <InputEmoji
                className="message-input"
                theme="dark"
                fontSize="1.125rem"
                value={newMessage}
                onChange={handleInputChange}
              />
              <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.chat}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
