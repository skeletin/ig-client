import React from "react";
import SuggestedUserCard from "../cards/SuggestedUserCard";

const SuggestedUsersContainer = ({ users }) => {
  return (
    <div className="flex flex-col">
      {users.map((user) => {
        return <SuggestedUserCard {...user} />;
      })}
    </div>
  );
};

export default SuggestedUsersContainer;
