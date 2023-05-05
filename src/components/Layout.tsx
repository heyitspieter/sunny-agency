import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return <div className="container">{props.children}</div>;
};

export default Layout;
