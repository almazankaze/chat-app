import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user-selector";
import AuthForm from "../../components/form/authform/AuthForm";

import "./auth.scss";

const Auth = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="auth-page">
      <section className="container auth-items">
        <AuthForm />
      </section>
    </div>
  );
};

export default Auth;
