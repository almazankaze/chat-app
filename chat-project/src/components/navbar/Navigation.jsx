import { useState, useEffect, Fragment } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="main-nav">Nav</nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
