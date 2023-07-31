import React, { useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import useProductContext from "../../../hooks/useProductContext";

const Header = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useProductContext();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);          // setLoggedIn is a dependency of useEffect

  const onHeaderLogin = () => {
    navigate("/login");
  };

  const logoutHeader = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const onHeaderSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="header">
      <span>Feedback</span>
      {loggedIn ? (
        <div className="header__loggedIn">
          <button className="header__logout__button" onClick={logoutHeader}>
            Logout
          </button>          
          <img
            src={
              "https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0"
            }
            alt="user"
          />
          <span>Welcome  </span>
        </div>
      ) : (
        <div className="header__buttons">
          <button className="header__login__button" onClick={onHeaderLogin}>
            Login
          </button>
          <button className="header__signup__button" onClick={onHeaderSignup}>
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
