import { useEffect, useState } from "react";

import context from "../contexts/context";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const { AuthContext } = context;
  const [authUser, setAuthUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/auth/is_authenticated", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(({ data }) => {
        const { data: user } = data;
        setAuthUser(user);
      });
  }, [token]);

  const storeToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, storeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
