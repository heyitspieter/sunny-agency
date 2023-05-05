import React from "react";
import arrowDown from "../assets/svgs/icon-arrow-down.svg";

import "../styles/layouts/header.scss";
import Button from "./ui/Button";

interface Props {
  children: React.ReactNode;
}

const Header: React.FC<Props> = (props) => {
  return (
    <div id="home" className="header">
      <div className="header__arrow">
        <Button
          onClick={() => (window.location.href = `${window.origin}#about`)}
          className="btn--icon"
        >
          <img
            src={arrowDown}
            alt="Arrown pointing down"
            width="36"
            height="144"
          />
        </Button>
      </div>
      {props.children}
    </div>
  );
};

export default Header;
