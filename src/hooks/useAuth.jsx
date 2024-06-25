import { useContext } from "react";
import context from "../components/contexts/context";

const useAuth = () => {
  const { AuthContext } = context;
  return useContext(AuthContext);
};
export default useAuth;
