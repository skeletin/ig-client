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

function AppSwitch() {
  const { authUser } = useAuth();
  return <Router>{authUser ? <AppRouter /> : <AuthRouter />}</Router>;
}

function AuthRouter() {
  return (
    <Routes>
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppWrapper />}>
        <Route index path="/" element={<Home />} />
        <Route path=":username" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
