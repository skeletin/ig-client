import React from "react";

const Typography = ({ children, cs }) => {
  return <p className={cs}>{children}</p>;
};

export default Typography;
