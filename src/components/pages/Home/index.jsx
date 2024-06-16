import HomeHeader from "./HomeHeader";
import SuggestedUsersContainer from "../../containers/SuggestedUsersContainer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["suggested-users"],
    queryFn: function () {
      return axios.get("./users.json");
    },
  });

  const { data: userData } = data;
  const { users } = userData;
  console.log(users);
  return (
    <div className={`flex flex-col h-full bg-[black] text-[white]`}>
      <HomeHeader />
      <div className="flex flex-col pt-7 px-4">
        <span
          className={`text-left text-[white] text-[16px] font-semibold leading-[20px]`}
        >
          Suggested for you
        </span>
        <SuggestedUsersContainer users={[]} />
      </div>
    </div>
  );
};

export default Home;
