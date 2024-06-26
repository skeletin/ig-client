import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import AppWrapper from "./components/AppWrapper";
import Profile from "./components/pages/Profile";
import useAuth from "./hooks/useAuth";

function App() {
  return <AppSwitch />;
}

function AuthRouter() {
  return (
    <Routes>
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppWrapper />}>
        <Route index path="/" element={<Home />} />
        <Route index path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

function AppSwitch() {
  const { authUser } = useAuth();
  return <Router>{authUser ? <AppRouter /> : <AuthRouter />}</Router>;
}

export default App;
