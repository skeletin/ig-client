import Plus from "../../icons/Plus";

const ReelsArchive = () => {
  return (
    <div className="flex h-[88px] px-2 mt-6">
      <div className="flex flex-col cursor-pointer">
        <div className="flex items-center justify-center w-[56px] h-[56px] bg-[#121212] rounded-full border-[#363636] border">
          <Plus fill="#737373" />
        </div>
        <div className="leading-[16px] font-normal text-[12px] pt-1.5">New</div>
      </div>
    </div>
  );
};

export default ReelsArchive;
