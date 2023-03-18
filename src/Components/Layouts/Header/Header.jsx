import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.navigate}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
