import { useState } from "react";
import IGLogo from "./IGLogo";
import Typography from "../../Typography";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useSignUpContext from "../../../hooks/useSignUpContext";

const UserProfileRegistration = () => {
  const { setStep } = useSignUpContext();
  return (
    <div className="flex flex-col pb-4">
      <IGLogo />
      <Typography
        cs={
          "text-[rgb(115,115,115)] font-semibold text-[16px] text-center leading-[20px]"
        }
      >
        Sign up to see photos and videos from your friends.
      </Typography>
      <button className="bg-[rgb(0,149,246)] text-white font-semibold px-[16px] py-[7px] rounded-[8px] w-full text-[14px] mt-5">
        Log in with Facebook
      </button>
      <div className="flex items-center my-4 w-full">
        <div className="h-[1px] w-full bg-[rgb(219,219,219)]"></div>
        <span className="text-[#737373] font-semibold text-[.8125rem] mx-[18px]">
          OR
        </span>
        <div className="h-[1px] w-full bg-[rgb(219,219,219)]"></div>
      </div>
      <UserProfileRegistrationInputsContainer />
      <div className="leading=[16px] text-[#737373] font-normal text-[12px] text-center mt-3 space-y-3.5 leading-[16px]">
        <Typography>
          People who use our service may have uploaded your contact information
          to Instagram. <span>Learn More</span>
        </Typography>
        <Typography>
          By signing up, you agree to our Terms , Privacy Policy and Cookies
          Policy.
        </Typography>
      </div>
      <button
        onClick={() => setStep((prev) => prev + 1)}
        className="bg-[#0095f6] text-white font-semibold w-full rounded-[8px] py-[6.5px] px-[16px] text-[14px] mt-4 opacity-[0.7]"
        type="click"
      >
        Sign up
      </button>
    </div>
  );
};

const UserProfileRegistrationInputsContainer = () => {
  const labels = ["email", "fullName", "username", "password"];
  return (
    <div className="flex flex-col space-y-1.5 w-full">
      {labels.map((label) => {
        return <UserProfileRegistrationInput key={label} label={label} />;
      })}
    </div>
  );
};

const UserProfileRegistrationInput = ({ label }) => {
  const { newUser, setNewUser } = useSignUpContext();
  const [isValue, setIsValue] = useState(newUser[label].length > 0);

  const mutation = useMutation({
    mutationFn: ({ email }) => {
      axios.post("http://localhost:4000/api/auth/valid_email", { email });
    },
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
    setIsValue(value.length > 0);
  };

  const labelize = () => {
    const splitLabel = label.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
    return splitLabel.charAt(0).toUpperCase() + splitLabel.slice(1);
  };

  const checkIfEmailExists = () => {
    if (label === "email") mutation.mutate(newUser);
  };

  return (
    <>
      <div className="relative border-[rgb(219,219,219)] border w-full rounded-[3px]">
        <span
          className={`left-2  text-[rgb(115,115,115)] absolute select-none pointer-events-none transition-all ${
            isValue ? "top-0 text-[0.6rem]" : "top-3 text-xs"
          }`}
        >
          {label === "email" ? "Mobile Number or email" : labelize()}
        </span>
        <input
          name={label}
          value={newUser[label]}
          onBlur={checkIfEmailExists}
          onChange={handleChange}
          className="bg-[rgb(250,250,250)] focus:outline-none w-full p-[12px_0_7px_8px] text-[12px]"
          type={label === "password" ? "password" : "text"}
        />
      </div>
    </>
  );
};

export default UserProfileRegistration;
