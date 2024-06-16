import React from "react";

const SuggestedUserCard = ({ imageUrl, fullName, username }) => {
  return (
    <div className="flex">
      <img src={imageUrl} />
      <div className="flex flex-col">
        <span>{username}</span>
        <span>{fullName}</span>
      </div>
    </div>
  );
};

export default SuggestedUserCard;
