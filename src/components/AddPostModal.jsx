import { useRef, useState } from "react";
import Close from "./icons/Close";
import Media from "./icons/Media";
import Back from "./icons/Back";
import SelectCrop from "./icons/SelectCrop";
import SelectZoom from "./icons/SelectZoom";
import MediaGallery from "./icons/MediaGallery";
import Emoji from "./icons/Emoji";
import Location from "./icons/Location";
import DownChevron from "./icons/DownChevron";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import shareLoading from "../assets/shareLoading.gif";
import shareComplete from "../assets/shareComplete.gif";

export const AddPostModal = ({ setIsOpen }) => {
  const input = useRef();
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [next, setNext] = useState(false);
  const [caption, setCaption] = useState("");

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (newPost) => {
      return (
        await axios.post(
          "http://localhost:3000/api/v1/upload/photos",
          newPost,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
      ).data;
    },
    onMutate: () => {
      setNext(false);
    },
  });

  const handleUpload = () => {
    input.current.click();
  };

  const handleChange = (e) => {
    const { files } = e.target;
    setFile(files[0]);
    if (files[0]) {
      const url = URL.createObjectURL(files[0]);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("post[image]", file);
    formData.append("post[caption]", caption);
    mutate(formData);
  };

  const handleNext = () => {
    setNext(true);
  };

  const goBack = () => {
    setNext(false);
  };

  return (
    <div className="flex items-center justify-center absolute inset-0 bg-black bg-opacity-60 px-4">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-[10px] right-[10px] p-[8px]"
      >
        <Close fill={"white"} />
      </button>
      <div
        className={`bg-[#262626] rounded-[12px] max-h-[176px] min-h-[391px] min-w-[348px] h-full overflow-hidden max-w-[900px] transition-all duration-500 ease-in-out ${
          next ? "w-full min-w-[600px]" : "w-[300px]"
        }`}
      >
        <AddPostModalHeader
          previewUrl={previewUrl}
          handleNext={handleNext}
          next={next}
          goBack={goBack}
          handleSubmit={handleSubmit}
          isSuccess={isSuccess}
        />
        {isPending ? (
          <div className="flex flex-col justify-center items-center flex-1 min-h-[90%]">
            <img
              className="w-[96px] h-[96px] object-cover"
              src={shareLoading}
            />
          </div>
        ) : !isPending && isSuccess ? (
          <div className="flex flex-col justify-center items-center flex-1 min-h-[90%]">
            <img
              className="w-[96px] h-[96px] object-cover"
              src={shareComplete}
            />
          </div>
        ) : (
          <div
            className={`relative flex flex-col justify-center items-center flex-1 min-h-[90%]`}
          >
            <Media fill={"white"} />
            <div className="leading-[25px] text-[whitesmoke] text-[20px] font-normal mt-3">
              Drag photos and videos here
            </div>
            <button
              onClick={handleUpload}
              type="button"
              className="bg-[#0095f6] text-white text-[14px] py-[6px] px-[16px] font-semibold rounded-[8px] mt-5"
            >
              Select from computer
            </button>{" "}
            {file && (
              <ImageContainer
                previewUrl={previewUrl}
                next={next}
                caption={caption}
                setCaption={setCaption}
              />
            )}
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-0 m-0 h-0 w-0"
        encType="multipart/form-data"
        method="POST"
        role="presentation"
      >
        <input
          ref={input}
          onChange={handleChange}
          className="hidden"
          accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime"
          multiple={false}
          type="file"
        />
      </form>
    </div>
  );
};

const AddPostModalHeader = ({
  previewUrl,
  handleNext,
  next,
  goBack,
  handleSubmit,
  isSuccess,
}) => {
  return previewUrl ? (
    <div className="flex items-center py-2.5 px-4">
      {isSuccess ? null : (
        <button onClick={goBack}>
          <Back fill={"white"} />
        </button>
      )}
      <span className="font-semibold text-[whitesmoke] text-[16px] leading-[24px] w-full">
        {isSuccess ? "Post Shared" : next ? "Create new post" : "Crop"}
      </span>
      {isSuccess ? null : next ? (
        <button
          onClick={handleSubmit}
          className="font-semibold text-[.875rem] text-[#0095F6] leading-[18px] hover:text-white"
        >
          Share
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="font-semibold text-[.875rem] text-[#0095F6] leading-[18px] hover:text-white"
        >
          Next
        </button>
      )}
    </div>
  ) : (
    <div className="border-b border-[#363636] py-2">
      <span className="text-[whitesmoke] text-[16px] font-semibold leading-[24px]">
        Create new post
      </span>
    </div>
  );
};

const ImageContainer = ({ previewUrl, next, caption, setCaption }) => {
  return (
    <div className="flex absolute inset-0 ">
      <ImagePreview previewUrl={previewUrl} next={next} />
      <CaptionEditor caption={caption} setCaption={setCaption} />
    </div>
  );
};

const ImagePreview = ({ previewUrl, next }) => {
  return (
    <div className="min-w-[348px]">
      <img className="object-cover w-full h-full" src={previewUrl} />
      {next ? null : (
        <div className="absolute flex justify-between px-4 items-center bottom-5 w-full">
          <div className="flex space-x-3">
            <button className="bg-[#1a1a1acc] rounded-full p-2 hover:opacity-70 transition">
              <SelectCrop fill={"white"} />
            </button>
            <button className="bg-[#1a1a1acc] rounded-full p-2 hover:opacity-70 transition">
              <SelectZoom fill={"white"} />
            </button>
          </div>
          <button className="bg-[#1a1a1acc] rounded-full p-2 hover:opacity-70 transition">
            <MediaGallery fill={"white"} />
          </button>
        </div>
      )}
    </div>
  );
};

const CaptionEditor = ({ caption, setCaption }) => {
  const handleChange = (e) => {
    if (e.target.value.length <= 2200) setCaption(e.target.value);
  };

  return (
    <div className="bg-[#262626] flex flex-col p-4 max-w-[348px] w-full overflow-auto">
      <div className="flex items-center space-x-3">
        <div className="rounded-full overflow-hidden">
          <img className="w-[28px] h-[28px]" src="/src/assets/ju.jpg" />
        </div>
        <div className="font-semibold text-[14px] text-white">johncupiddd</div>
      </div>
      <textarea
        value={caption}
        onChange={handleChange}
        placeholder="Write a caption... "
        className="bg-[#262626] resize-none focus:outline-none w-full text-[16px] text-[rgba(245,245,245)] mt-4 text-left break-words text-wrap min-h-[168px] max-h-[168px]"
      ></textarea>
      <div className="flex justify-between">
        <button>
          <Emoji fill={"#a8a8a8"} />
        </button>
        <div className="leading-[16px] font-normal text-[#737373] text-[12px]">
          {caption.length}/2,200
        </div>
      </div>
      <div className="flex py-4 items-center w-full">
        <input
          className="w-full bg-[#262626] focus:outline-none text-[#f5f5f5] text-[16px]"
          placeholder="Add location"
        />
        <Location fill={"#f5f5f5"} />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-[#f5f5f5] text-[16px] leading-[20px]">
          Accessibility
        </div>
        <DownChevron />
      </div>
      <div className="flex items-center justify-between">
        <div className="py-4 text-[#f5f5f5] text-[16px] leading-[20px]">
          Advanced Settings
        </div>
        <DownChevron />
      </div>
    </div>
  );
};
