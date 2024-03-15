import classNames from "classnames";
import { useState, useEffect, Fragment } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../store/user/user-selector";
import {
  selectIsMenuOpen,
  selectIsSearchOpen,
  selectNavPath,
} from "../../store/navbar/navbar-selector";
import {
  setIsMenuOpen,
  setIsSearchOpen,
  setNavPath,
} from "../../store/navbar/navbar-actions";

import { logout } from "../../store/user/user-actions";

import "./navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const isSearchOpen = useSelector(selectIsSearchOpen);
  const [isTopPage, setIsTopPage] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = useSelector(selectNavPath);
  const user = useSelector(selectUser);

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    if (currentPath === "/auth" && prevPath.current === "/auth") {
      dispatch(setNavPath(currentPath, "/"));
    } else dispatch(setNavPath(currentPath, prevPath.current));

    dispatch(setIsSearchOpen(false));
    // dispatch(setIsModalOpen(false));
  }, [location]);

  const signMeOut = async () => {
    dispatch(setIsSearchOpen(false));
    dispatch(setIsMenuOpen(false));
    dispatch(logout()).then(() => {
      navigate("/auth");
    });
  };

  const searchClassNames = classNames({
    "navsearch-show": isSearchOpen,
    navsearch: !isSearchOpen,
  });

  const toggleIsMenuOpen = () => {
    dispatch(setIsSearchOpen(false));
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  const toggleIsSearchOpen = () => {
    dispatch(setIsMenuOpen(false));
    dispatch(setIsSearchOpen(!isSearchOpen));
  };

  useEffect(() => {
    const handleNavIsTop = () => {
      window.pageYOffset > 10 ? setIsTopPage(false) : setIsTopPage(true);
    };

    window.addEventListener("scroll", handleNavIsTop);

    return () => {
      window.removeEventListener("scroll", handleNavIsTop);
    };
  }, []);

  return (
    <Fragment>
      <nav className="main-nav">
        Nav
        {user ? <div onClick={signMeOut}>logout</div> : ""}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
