import { Link, Outlet } from "react-router-dom";
import Icon from "./Icon";

const AppWrapper = () => {
  return (
    <div className={`flex flex-col h-full w-full bg-[black] overflow-hidden`}>
      <Outlet />
      <nav
        className={`flex justify-center space-x-[1.9rem] bg-[black]  border-t border-[#282828]`}
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
        <Link to="/profile">
          <Icon name="Explore" />
        </Link>
      </nav>
    </div>
  );
};

export default AppWrapper;
