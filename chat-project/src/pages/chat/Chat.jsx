import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user-selector";
import { Outlet, Navigate } from "react-router-dom";

import SideNav from "../../components/sidenav/SideNav";
import "./chat.scss";

const Chat = () => {
  const user = useSelector(selectUser);

  return user ? (
    <div className="container chat-container">
      <div className="chat-main">
        <SideNav />
        <div className="chat-messages-container">
          <div className="message-box">
            <div className="message-header">
              Header{" "}
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
              <input type="file" name="" id="" style={{ display: "none" }} />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default Chat;
