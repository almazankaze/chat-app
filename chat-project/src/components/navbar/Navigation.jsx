import { useState, useEffect, Fragment } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

import "./navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div>Nav</div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
