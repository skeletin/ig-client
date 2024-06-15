import { useState, createContext } from "react";
import RegistrationFooter from "../../RegistrationFooter";
import { RegistrationSwitch } from "./RegistrationSwitch";
import UserProfileRegistration from "./UserProfileRegistration";
import BirthDateRegistration from "./BirthDateRegistration";
import OTPConfirmation from "./OTPConfirmation";

export const SignUpContext = createContext({});

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
    birthDate: {
      year: "",
      month: "",
      day: "",
    },
  });
  const [step, setStep] = useState(0);

  console.log(newUser);

  const registrations = [
    <UserProfileRegistration key={1} />,
    <BirthDateRegistration key={2} />,
    <OTPConfirmation key={3} />,
  ];

  return (
    <SignUpContext.Provider value={{ newUser, setNewUser, setStep }}>
      <main className="flex flex-col items-center h-full w-full mt-1.5">
        <div className="flex flex-col items-center pt-[10px] pb-[18px] mt-[12px] border border-[#DBDBDB] max-w-[348px] w-full">
          <form className="flex flex-col items-center  max-w-[270px] w-full pt-3">
            {registrations[step]}
          </form>
        </div>
        <RegistrationSwitch />
        <RegistrationFooter />
      </main>
    </SignUpContext.Provider>
  );
};

export default SignUp;
