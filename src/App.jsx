import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import AppWrapper from "./components/AppWrapper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<AppWrapper />}>
          <Route index path="" element={<Home />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
