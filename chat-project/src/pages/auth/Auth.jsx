import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user-selector";
import { selectNavPath } from "../../store/navbar/navbar-selector";
import AuthForm from "../../components/form/authform/AuthForm";

import "./auth.scss";

const Auth = () => {
  const user = useSelector(selectUser);
  const prevPath = useSelector(selectNavPath);

  return !user ? (
    <div className="auth-page">
      <section className="container auth-items">
        <AuthForm />
      </section>
    </div>
  ) : (
    <Navigate to={prevPath.prev} replace />
  );
};

export default Auth;
