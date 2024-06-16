import { useContext } from "react";
import context from "../../contexts/context";
import HomeHeader from "./HomeHeader";
import Typography from "../../Typography";

const Home = () => {
  const { ThemeContext } = context;
  const { bgColor, color } = useContext(ThemeContext);
  return (
    <div className={`flex flex-col h-full bg-[${bgColor}] text-[${color}]`}>
      <HomeHeader />
      <div className="flex flex-col pt-7 px-4">
        <span
          className={`text-left text-[${color}] text-[16px] font-semibold leading-[20px]`}
        >
          Suggested for you
        </span>
      </div>
    </div>
  );
};

export default Home;
