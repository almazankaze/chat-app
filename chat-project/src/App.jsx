import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserIsLoading } from "./store/user/user-selector";
import { getUser } from "./store/user/user-actions";

import Navigation from "./components/navbar/Navigation";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import ScrollToTop from "./utils/ScrollToTop";
import Spinner from "./components/spinner/Spinner";
import "./App.scss";

function App() {
  const isLoading = useSelector(selectUserIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      dispatch(getUser());
    };

    checkIsLoggedIn();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
