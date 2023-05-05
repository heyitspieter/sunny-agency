import React from "react";

import "../../styles/components/button.scss";

interface Props {
  type?: "button" | "submit" | "reset";
  label?: string;
  outline?: boolean;
  className?: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ type = "button", ...props }) => {
  return (
    <button
      type={type}
      onClick={props.onClick}
      className={`btn ${props.className ? props.className : ``} ${
        props.outline ? `btn--outline` : ``
      }`}
    >
      {props.children || props.label}
    </button>
  );
};

export default React.memo(Button);
