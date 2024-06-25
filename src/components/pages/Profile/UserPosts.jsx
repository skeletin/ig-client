import Posts from "../../icons/Posts";
import Saved from "../../icons/Saved";
import Tagged from "../../icons/Tagged";

const UserPosts = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex text-white w-full text-[14px] font-normal border-t border-[#262626] py-3">
        <div className="flex flex-col w-1/3 ">
          <div>0</div>
          <div className="text-[#a8a8a8] leading-[14px]">posts</div>
        </div>
        <div className="flex flex-col w-1/3 ">
          <div>0</div>
          <div className="text-[#a8a8a8] leading-[14px]">followers</div>
        </div>
        <div className="flex flex-col w-1/3 ">
          <div>0</div>
          <div className="text-[#a8a8a8] leading-[14px]">following</div>
        </div>
      </div>
      <div className="flex w-full border-b border-[#262626]">
        <div className="flex justify-center w-1/3 border-t border-[#262626] py-2.5">
          <Posts fill="#a8a8a8" />
        </div>
        <div className="flex justify-center w-1/3 border-t border-[#262626] py-2.5">
          <Saved fill="#a8a8a8" />
        </div>
        <div className="flex justify-center w-1/3 border-t border-[#262626] py-2.5">
          <Tagged fill="#a8a8a8" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default UserPosts;
