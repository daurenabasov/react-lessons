import React from "react";
import s from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/");
  };

  return (
    <header className={s.header}>
      <div className={s.logo} onClick={redirectHome}>
        Logo
      </div>
      <nav>
        <ul className={s.navigate}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
