import InstagramLogo from "../../icons/InstagramLogo";
import DownChevron from "../../icons/DownChevron";
import Notifications from "../../icons/Notifications";
import Search from "../../icons/Search";

const HomeHeader = () => {
  return (
    <div
      className={`flex items-center w-full border-b border-[#282828] py-3 px-4 max-h-[61px] max-w-full sticky top-0 bg-black`}
    >
      <div className="flex items-center space-x-2">
        <InstagramLogo />
        <DownChevron />
      </div>
      <div className="w-full ml-4">
        <div className="relative">
          <input
            placeholder="Search"
            className="rounded-[8px] bg-[#262626] px-[16px] py-[9px] text-[16px] text-[#f5f5f5] focus:outline-none w-[17rem] "
          />
          <Search />
        </div>
      </div>
      <Notifications />
    </div>
  );
};

export default HomeHeader;
