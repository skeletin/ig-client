import { motion } from "framer-motion";
import Comment from "./icons/Comment";
import SharePost from "./icons/SharePost";
import Like from "./icons/Like";
import Bookmark from "./icons/Bookmark";
import Close from "./icons/Close";
import co from "../assets/co.jpg";
import bern from "../assets/bern.jpg";
import joy from "../assets/joy.jpg";

const PostModal = ({ post, setIsPostModalOpen }) => {
  const { imageUrl, caption } = post;
  return (
    <div className="absolute inset-0 bg-black flex justify-center items-center bg-opacity-35">
      <motion.div
        initial={{ scale: 1.09, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: "circInOut", duration: 0.15 }}
        className="flex flex-col rounded-b-lg"
      >
        <div className="flex justify-center items-center h-[419px] w-[335px]">
          <img className="object-cover w-full h-full " src={imageUrl} />
        </div>
        <div className="bg-black flex flex-col p-4 rounded-b-[8px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3.5">
              <Like fill={"white"} />
              <Comment fill={"white"} />
              <SharePost fill={"white"} />
            </div>
            <div>
              <Bookmark fill={"white"} />
            </div>
          </div>
          <div className="flex mt-3">
            <div className="flex">
              <div className="relative flex items-center justify-center w-[20px] h-[20px] rounded-full overflow-hidden order-1">
                <img src={co} className="object-cover w-full h-full" />
              </div>
              <div className="relative flex items-center justify-center w-[20px] h-[20px] rounded-full overflow-hidden order-2 right-1">
                <img src={bern} className="object-cover w-full h-full" />
              </div>
              <div className="relative flex items-center justify-center w-[20px] h-[20px] rounded-full overflow-hidden order-3 right-2">
                <img src={joy} className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="leading-[18px] font-normal text-[whitesmoke] text-[14px]">
              <span>liked by </span>
              <span className="font-semibold">bhad_bernie </span>
              <span>and </span>
              <span className="font-semibold">others</span>
            </div>
          </div>
          <div className="flex mt-2">
            <span className="text-[12px] text-[#A8A8A8]">May 25</span>
          </div>
        </div>
      </motion.div>
      <button
        onClick={() => setIsPostModalOpen(false)}
        className="absolute top-[10px] right-[10px] p-[8px]"
      >
        <Close fill={"white"} />
      </button>
    </div>
  );
};

export default PostModal;
