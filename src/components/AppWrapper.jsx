import { Link, Outlet } from "react-router-dom";
import Icon from "./Icon";
import { AddPostModal } from "./AddPostModal";
import { useState } from "react";

const AppWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`relative flex flex-col h-full w-full bg-[black] overflow-hidden`}
    >
      <Outlet />
      <nav
        className={`flex justify-center space-x-[1.9rem] bg-[black]  border-t border-[#282828] px-8`}
      >
        <Link className="w-1/6" to="/">
          <Icon name="Home" />
        </Link>
        <Link className="w-1/6" to="/explore">
          <Icon name="Explore" />
        </Link>
        <Link className="w-1/6" to="/reels">
          <Icon name="Reels" />
        </Link>
        <Link
          onClick={() => setIsOpen(true)}
          className="w-1/6 transition hover:scale-105"
          to="#"
        >
          <Icon name="New post" />
        </Link>
        <Link className="w-1/6" to="/direct/inbox">
          <Icon name="Messenger" />
        </Link>
        <Link className="flex items-center justify-center w-1/6" to="/profile">
          <div className="rounded-full overflow-hidden object-cover">
            <img className="w-[24px] h-[24px]" src="/src/assets/ju.jpg" />
          </div>
        </Link>
      </nav>
      {isOpen && <AddPostModal setIsOpen={setIsOpen} isOpen={isOpen} />}
    </div>
  );
};

export default AppWrapper;
