import React from "react";

import "../../styles/components/heading.scss";

interface Props {
  title: string;
  classes?: string;
  center?: boolean;
  uppercase?: boolean;
  size: "lg" | "sm" | "md";
  color?: "black" | "white";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<Props> = ({
  color = "white",
  classes = "",
  ...props
}) => {
  return (
    <props.tag
      className={`heading ${classes} ${props.center ? `heading--center` : ``} ${
        props.uppercase ? `heading--uppercase` : ``
      } heading--${props.size} heading--${color}`}
    >
      {props.title}
    </props.tag>
  );
};

export default Heading;
