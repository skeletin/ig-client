import { motion } from "framer-motion";
import Comment from "./icons/Comment";
import SharePost from "./icons/SharePost";
import Like from "./icons/Like";
import Bookmark from "./icons/Bookmark";
import Close from "./icons/Close";
import co from "../assets/co.jpg";
import bern from "../assets/bern.jpg";
import joy from "../assets/joy.jpg";
import ju from "../assets/ju.jpg";
import MoreOptions from "./icons/MoreOptions";
import Emoji from "./icons/Emoji";
import { useState } from "react";

const PostModal = ({ post, setIsPostModalOpen }) => {
  const [comment, setComment] = useState("");
  const { imageUrl, year, user } = post;
  const { username } = user;

  const handleChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  return (
    <div className="absolute inset-0 bg-black flex justify-center items-center bg-opacity-35 px-[64px]">
      <motion.div
        initial={{ scale: 1.09, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: "circInOut", duration: 0.15 }}
        className="flex flex-col rounded-b-lg  md:flex-row md:rounded-lg md:h-[450px]"
      >
        <div className="flex justify-center items-center h-[419px] w-[335px] md:h-full">
          <img className="object-cover w-full h-full " src={imageUrl} />
        </div>
        <div className="md:flex md:flex-col w-[405px] md:h-full">
          <div className="md:border-b md:border-[#282828] md:flex md:justify-between md:items-center md:rounded-b md:rounded-l md:py-[14px] md:pl-[16px] md:pr-[16px] md:bg-black">
            <div className="flex">
              <div className="w-[42px] h-[42px] overflow-hidden rounded-full bg-black p-0.5 border">
                <img
                  className="h-full w-full object-cover rounded-full"
                  src={ju}
                />
              </div>
              <div className="md:flex md:flex-col md:text-[whitesmoke] md:text-left md:ml-2">
                <div className="md:text-[14px] md:font-semibold">
                  {username}
                </div>
                <div className="md:text-[12px]">{year}</div>
              </div>
            </div>
            <div>
              <MoreOptions fill={"white"} />
            </div>
          </div>
          <div className="md:bg-black md:h-[230px] md:w-full md:flex md:flex-col md:justify-center md:text-[whitesmoke] md:border-b md:border-[#282828]">
            <div className="md:text-[24px] md:font-bold">No Comments yet.</div>
            <div className="md:text-[14px]">Start the conversation.</div>
          </div>
          <div className="bg-black flex flex-col p-4">
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
            <div className="flex mt-3 ">
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
          <form className="md:bg-black md:flex md:items-center md:px-4 md:flex-grow md:py-5 md:border-t md:border-[#282828]">
            <div className="mr-4">
              <Emoji fill={"white"} height={"24"} width={"24"} />
            </div>
            <div className="md:flex md:items-center md:w-full md:max-h-[2rem]">
              <textarea
                name="comment"
                value={comment}
                placeholder="Add a comment..."
                className="md:bg-black md:text-[whitesmoke] md:text-[14px] md:w-full md:focus:outline-none md:resize-none md:max-h-[1.3rem]"
                onChange={handleChange}
              />
            </div>
            <button className="md:text-[#0095F6] md:text-[14px] md:hover:text-white pl-4">
              Post
            </button>
          </form>
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
