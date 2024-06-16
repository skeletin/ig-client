const SuggestedUserCard = ({ imageUrl, fullName, username }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        <div className="overflow-hidden rounded-full w-[44px] h-[44px] mr-[12px]">
          <img className="w-[44px] h-[44px]" src={imageUrl} />
        </div>
        <div className="flex flex-col items-start min-w-0">
          <span className="text-[14px] font-semibold text-[#f5f5f5] leading-[18px]">
            {username}
          </span>
          <span className="text-[14px] font-normal text-[#a8a8a8] leading-[18px]">
            {fullName}
          </span>
          <span className="text-[12px] font-normal text-[#a8a8a8] leading-[16px]">
            Suggested for you
          </span>
        </div>
      </div>
      <button className="text-white bg-[#0095F6] py-[7px] px-[16px] rounded-[8px] self-center font-semibold text-[14px] leading-[18px] text-ellipsis w-auto">
        <div className="flex items-start justify-start px-[4px] overflow-x-visible overflow-y-visible">
          Follow
        </div>
      </button>
    </div>
  );
};

export default SuggestedUserCard;
