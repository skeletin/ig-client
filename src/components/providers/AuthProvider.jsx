import React, { useEffect, useState } from "react";

import context from "../contexts/context";

const AuthProvider = ({ children }) => {
  const { AuthContext } = context;
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {}, []);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
