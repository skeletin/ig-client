const Back = ({ fill }) => {
  return (
    <svg
      aria-label="Back"
      fill={fill}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Back</title>
      <line
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="2.909"
        x2="22.001"
        y1="12.004"
        y2="12.004"
      ></line>
      <polyline
        fill="none"
        points="9.276 4.726 2.001 12.004 9.276 19.274"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polyline>
    </svg>
  );
};

export default Back;
