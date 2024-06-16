import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import context from "./contexts/context";
import Icon from "./Icon";

const AppWrapper = () => {
  const { ThemeContext } = context;
  const { bgColor, borderTopColor } = useContext(ThemeContext);

  return (
    <div className={`flex flex-col h-full w-full bg-[${bgColor}]`}>
      <Outlet />
      <nav
        className={`flex justify-center space-x-[1.9rem] bg-[${bgColor}]  border-t border-[${borderTopColor}]`}
      >
        <Link to="/">
          <Icon name="Home" />
        </Link>
        <Link to="/explore">
          <Icon name="Explore" />
        </Link>
        <Link to="/reels">
          <Icon name="Reels" />
        </Link>
        <Link to="#">
          <Icon name="New post" />
        </Link>
        <Link to="/direct/inbox">
          <Icon name="Messenger" />
        </Link>
        <Icon name="Explore" />
      </nav>
    </div>
  );
};

export default AppWrapper;
