import HomeHeader from "./HomeHeader";
import SuggestedUsersContainer from "../../containers/SuggestedUsersContainer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["suggested-users"],
    queryFn: async function () {
      const { data } = await axios.get("./users.json");
      return data;
    },
  });

  return (
    <div
      className={`flex flex-col h-full bg-[black] text-[white] overflow-auto`}
    >
      <HomeHeader />
      <div className="flex flex-col pt-7 px-4">
        <span
          className={`text-left text-[white] text-[16px] font-semibold leading-[20px]`}
        >
          Suggested for you
        </span>
        <SuggestedUsersContainer users={data || []} />
      </div>
    </div>
  );
};

export default Home;
