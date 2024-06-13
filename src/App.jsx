import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
      }}
    >
      <Router>
        <Routes>
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
