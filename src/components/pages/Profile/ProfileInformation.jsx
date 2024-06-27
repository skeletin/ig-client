import useAuth from "../../../hooks/useAuth";
import Link from "../../icons/Link";
import Options from "../../icons/Options";
import ReelsArchive from "./ReelsArchive";

const ProfileInformation = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex flex-col text-white">
      <div className="flex h-[200px]">
        <div className="flex flex-col justify-end px-4">
          <div className="relative">
            <div className="rounded-full overflow-hidden">
              <img className="w-[77px] h-[77px]" src="/src/assets/ju.jpg" />
              <div className="absolute flex -top-[2.1rem] left-0.5 items-center bg-[#363636] px-2 leading-[13px] rounded-[14px] p-[8px] min-h-[42px] ">
                <div className="text-[11px] leading-[13px] text-center select-none cursor-pointer text-[#a8a8a8]">
                  Note...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-5 pl-3">
          <div className="flex items-center space-x-4">
            <span className="font-normal text-[20px]">{authUser.username}</span>
            <Options />
          </div>
          <div className="flex space-x-2 pt-4">
            <button className="bg-[#363636] font-semibold text-[14px] rounded-[8px] py-1.5 px-5">
              Edit profile
            </button>
            <button className="bg-[#363636] font-semibold text-[14px] rounded-[8px] py-1.5 px-5">
              View archive
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[1.35rem] px-4">
        <span className="self-start font-normal text-[14px] leading-[14px]">
          Let&apos;s see what we can build 🔨
        </span>
        <div className="flex items-center space-x-1.5">
          <Link />
          <a className="leading-[22px] text-[14px] font-semibold text-[#e0f1ff]">
            theonyxroom.dev
          </a>
        </div>
      </div>
      <ReelsArchive />
    </div>
  );
};

export default ProfileInformation;
