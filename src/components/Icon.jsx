import MessengerIcon from "./icons/MessengerIcon";
import ExploreIcon from "./icons/ExploreIcon";
import NewPostIcon from "./icons/NewPostIcon";
import { HomeIcon } from "./icons/HomeIcon";
import ReelsIcon from "./icons/ReelsIcon";

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
    }
  };

  return (
    <div className="flex justify-center items-center h-[48px] w-[48px]">
      {getIcon(name)}
    </div>
  );
};

export default Icon;
