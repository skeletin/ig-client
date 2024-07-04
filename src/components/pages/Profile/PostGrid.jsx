import { useQuery } from "@tanstack/react-query";
import { useParams, useOutletContext } from "react-router-dom";
import axios from "axios";

const PostGrid = () => {
  const { username } = useParams();
  const { data } = useQuery({
    queryKey: ["user-posts"],
    queryFn: async () => {
      return (
        await axios.get(`http://localhost:3000/api/v1/${username}/posts`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
      ).data;
    },
  });

  if (data) {
    const { data: posts } = data;
    return (
      <div className="grid grid-cols-3 grid-rows-3">
        {posts.map((post) => {
          if (post.imageUrl) return <Post key={post.id} post={post} />;
        })}
      </div>
    );
  }
};

const Post = ({ post }) => {
  const { handlePostModal } = useOutletContext();

  return (
    <div className="relative flex items-center justify-center pr-1 pb-1">
      <img
        className="w-full h-full object-cover aspect-square"
        src={post.imageUrl}
        alt="photo"
      />
      <a
        onClick={() => {
          handlePostModal(post);
        }}
        className="flex flex-col items-center justify-center inset-0 bg-transparent absolute hover:bg-black opacity-35 cursor-pointer"
      >
        <div></div>
        <div></div>
      </a>
    </div>
  );
};

export default PostGrid;
