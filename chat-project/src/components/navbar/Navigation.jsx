import classNames from "classnames";
import { useEffect, Fragment } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectUser, selectSocket } from "../../store/user/user-selector";
import { selectNavPath } from "../../store/navbar/navbar-selector";
import { setNavPath } from "../../store/navbar/navbar-actions";

import { logout } from "../../store/user/user-actions";
import TextsmsIcon from "@mui/icons-material/Textsms";

import "./navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = useSelector(selectNavPath);
  const user = useSelector(selectUser);
  const socket = useSelector(selectSocket);

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    if (currentPath === "/auth" && prevPath.current === "/auth") {
      dispatch(setNavPath(currentPath, "/"));
    } else dispatch(setNavPath(currentPath, prevPath.current));
  }, [location]);

  const signMeOut = async () => {
    dispatch(logout()).then(() => {
      navigate("/auth");
    });
  };

  return (
    <Fragment>
      <nav
        className={
          prevPath.current.slice(0, 5) !== "/chat"
            ? "main-nav"
            : "main-nav hide-nav"
        }
      >
        <div className="navbar-left">
          <Link to="/" className="navbar-logo-container">
            <TextsmsIcon className="navbar-logo" />
            <h2>ChatCord</h2>
          </Link>
        </div>
        <div className="navbar-middle">
          <ul className="navbar-links">
            <li>
              <Link className="nav-link" to="/">
                Download
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/">
                Nitro
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Discover
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Safety
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/">
                Support
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          {user ? (
            <div className="nav-link" onClick={signMeOut}>
              Logout
            </div>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
