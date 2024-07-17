import MessengerIcon from "./icons/MessengerIcon";
import ExploreIcon from "./icons/ExploreIcon";
import NewPostIcon from "./icons/NewPostIcon";
import { HomeIcon } from "./icons/HomeIcon";
import ReelsIcon from "./icons/ReelsIcon";
import Search from "./icons/Search";
import Notifications from "./icons/Notifications";
import SharePost from "./icons/SharePost";
import Like from "./icons/Like";

const Icon = ({ name }) => {
  const getIcon = (name) => {
    switch (name) {
      case "Messenger":
        return <MessengerIcon />;
      case "Explore":
        return <ExploreIcon />;
      case "New post":
        return <NewPostIcon />;
      case "Home":
        return <HomeIcon />;
      case "Reels":
        return <ReelsIcon fill={"white"} />;
      case "Search":
        return <Search fill={"white"} width={24} height={24} />;
      case "Notification":
        return <Notifications />;
      case "Messages":
        return <SharePost fill={"white"} />;
      case "Notifications":
        return <Like fill={"white"} />;
    }
  };

  return (
    <div className="flex justify-center items-center h-[48px] w-[48px]">
      {getIcon(name)}
    </div>
  );
};

export default Icon;
