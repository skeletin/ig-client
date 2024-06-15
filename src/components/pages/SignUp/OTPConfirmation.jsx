import { useState } from "react";
import useSignUpContext from "../../../hooks/useSignUpContext";
import Typography from "../../Typography";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import snakecasify from "../../../helpers/snakecasify";

const OTPConfirmation = () => {
  const { setStep, newUser } = useSignUpContext();
  const [OTP, setOTP] = useState({ passcode: "" });

  const mutation = useMutation({
    mutationFn: (userData) => {
      return axios.post("http://localhost:3000/api/v1/auth/verify_email", userData);
    },

    onSuccess: (data) => {
      console.log(data)
    }
  });

  const handleClick = (e) => {
    e.preventDefault()
    const { birthDate } = newUser;
    const userData = {
      ...newUser,
      ...OTP,
      birthDate: `${birthDate.year}-${birthDate.month}-${birthDate.day}`,
    };

    mutation.mutate({
      user: snakecasify(userData),
    })
  }
  console.log(OTP)
  return (
    <div className="flex flex-col items-center">
      <img
        aria-label="Birthday cupcake"
        src="src/assets/mail.png"
        className="w-[92px] h-[65px] font-normal"
      />
      <Typography cs={"text-[14px] font-semibold mt-4"}>
        Enter Confirmation Code
      </Typography>
      <Typography cs={"text-[14px] mt-4 leading-[18px] w-full"}>
        Enter the confirmation code we sent to {newUser.email}.{" "}
        <span className={"text-[#0095f6] font-semibold"}> Resend Code.</span>
      </Typography>
      <input
        value={OTP.passcode}
        onChange={({ target }) => setOTP({ passcode: target.value })}
        maxLength={6}
        name="passcode"
        placeholder="Confirmation Code"
        className={
          "border border-[#dbdbdb] p-[4px_12px] w-full text-[14px] leading-[30px] bg-[#fafafa] rounded-[6px] focus:outline-none focus:border-[#a8a8a8] mt-6"
        }
      />
      <button
        disabled={OTP.passcode.length !== 6}
        className={`bg-[rgb(0,149,246)] text-white font-semibold px-[16px] py-[7px] rounded-[8px] w-full  mt-4 border-[#dbdbdb]  text-[.875rem] ${
          OTP.passcode.length === 6 ? "" : "opacity-30 cursor-not-allowed"
        }`}
        type="click"
        onClick={handleClick}
      >
        <span className={`${OTP.passcode.length === 6 ? "" : "opacity-50"} `}>Next</span>
      </button>
      <button
        onClick={() => setStep((p) => p - 1)}
        className="text-[rgb(0,149,246)] font-semibold text-[14px] mt-4"
      >
        Go back
      </button>
    </div>
  );
};

export default OTPConfirmation;
