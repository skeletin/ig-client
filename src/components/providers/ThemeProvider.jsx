import { useState } from "react";
import context from "../contexts/context";

const ThemeProvider = ({ children }) => {
  const { ThemeContext } = context;
  const [theme, setTheme] = useState({
    bgColor: "black",
    color: "white",
    borderTopColor: "#282828",
    borderRightColor: "#282828",
    borderBottomColor: "#282828",
  });
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
