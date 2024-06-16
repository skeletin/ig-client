import SuggestedUserCard from "../cards/SuggestedUserCard";

const SuggestedUsersContainer = ({ users }) => {
  return (
    <div className="flex flex-col mt-[1.65rem] space-y-4 overflow-auto">
      {users.map((user) => {
        return <SuggestedUserCard key={user.fullName} {...user} />;
      })}
      {users.map((user) => {
        return <SuggestedUserCard key={user.fullName} {...user} />;
      })}
    </div>
  );
};

export default SuggestedUsersContainer;
