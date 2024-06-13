import { useContext } from "react";
import { SignUpContext } from "../components/pages/SignUp";

const useSignUpContext = () => {
  return useContext(SignUpContext);
};
export default useSignUpContext;
