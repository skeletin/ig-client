const Bookmark = ({ fill }) => {
  return (
    <svg
      aria-label="Save"
      fill={fill}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Bookmark</title>
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};

export default Bookmark;
