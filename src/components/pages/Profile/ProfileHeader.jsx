import useAuth from "../../../hooks/useAuth";
import DownChevron from "../../icons/DownChevron";
import Options from "../../icons/Options";
import Threads from "../../icons/Threads";

const ProfileHeader = () => {
  const { authUser } = useAuth();
  const { username } = authUser;
  return (
    <div className="flex w-full text-white justify-between border-b border-[#282828] px-4 py-2.5">
      <Options />
      <div className="flex items-center space-x-1">
        <span className="text-sm font-semibold">{username}</span>
        <DownChevron />
      </div>
      <Threads />
    </div>
  );
};

export default ProfileHeader;
