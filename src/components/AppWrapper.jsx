import { Link, Outlet } from "react-router-dom";
import Icon from "./Icon";
import { AddPostModal } from "./AddPostModal";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import PostModal from "./PostModal";
import Ig from "./icons/IG";
import Search from "./icons/Search";

const AppWrapper = () => {
  const { authUser } = useAuth();
  const { username } = authUser;
  const [isOpen, setIsOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [post, setPost] = useState(null);

  const handlePostModal = (post) => {
    setIsPostModalOpen(true);
    setPost(post);
  };
  return (
    <div
      className={`relative flex flex-col h-full w-full bg-[black] overflow-hidden md:flex-row`}
    >
      <Outlet context={{ handlePostModal }} />
      <nav
        className={`flex justify-center space-x-[1.9rem] bg-[black]  border-t border-[#282828] px-8 md:order-1 md:flex-col md:space-x-0 md:border-t-0 md:justify-normal md:border-r md:px-0 md:w-20 md:py-9`}
      >
        <Link className="hidden w-1/6 md:w-full md:flex md:justify-center mb-11">
          <Ig fill={"white"} />
        </Link>
        <div className="flex space-x-[1.9rem] w-full md:flex md:flex-col md:space-x-0 md:space-y-2">
          <Link
            className="order-1 w-1/6 md:w-full md:flex md:justify-center md:order-[0]"
            to="/"
          >
            <Icon name="Home" />
          </Link>
          <Link className="hidden md:w-full md:flex md:justify-center md:order-[0]">
            <Icon name="Search" />
          </Link>
          <Link className="order-2 w-1/6 md:w-full md:flex md:justify-center md:order-[0]">
            <Icon name="Explore" />
          </Link>
          <Link className="order-3 w-1/6 md:w-full md:flex md:justify-center md:order-[0]">
            <Icon name="Reels" />
          </Link>
          <Link className="order-5 w-1/6 md:w-full md:flex md:justify-center md:order-[0]">
            <Icon name="Messages" />
          </Link>
          <Link className="hidden md:w-full md:flex md:justify-center md:order-[0]">
            <Icon name="Notifications" />
          </Link>
          <Link
            onClick={() => setIsOpen(true)}
            className="order-4 w-1/6 transition hover:scale-105 md:w-full md:flex md:justify-center md:order-[0]"
            to="#"
          >
            <Icon name="New post" />
          </Link>
          <Link className="hidden md:hidden" to="/direct/inbox">
            <Icon name="Messenger" />
          </Link>
          <Link
            className="order-6 flex items-center justify-center w-1/6 md:w-full md:flex md:justify-center md:h-[48px]"
            to={`/${username}`}
          >
            <div className="rounded-full overflow-hidden object-cover">
              <img className="w-[24px] h-[24px]" src="/src/assets/ju.jpg" />
            </div>
          </Link>
        </div>
      </nav>
      {isOpen && <AddPostModal setIsOpen={setIsOpen} isOpen={isOpen} />}
      {isPostModalOpen && (
        <PostModal post={post} setIsPostModalOpen={setIsPostModalOpen} />
      )}
    </div>
  );
};

export default AppWrapper;
