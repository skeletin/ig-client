import { useState } from "react";
import Typography from "../../Typography";
import useSignUpContext from "../../../hooks/useSignUpContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const BirthDateRegistration = () => {
  const { setNewUser, setStep, newUser } = useSignUpContext();
  const [month, setMonth] = useState(new Date().getMonth());

  const years = Array.from(
    { length: new Date().getFullYear() - (new Date().getFullYear() - 105) + 1 },
    (_, i) => i + new Date().getFullYear() - 105
  ).reverse();

  const months = [
    { name: "January", days: 31 },
    { name: "February", days: 28 }, // Consider leap years separately if needed
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];

  const generateDays = (month) => {
    return Array.from({ length: months[month].days }, (_, i) => i + 1);
  };

  const chooseMonth = ({ target }) => {
    const { name, value } = target;
    setMonth(value);
    setNewUser((prev) => ({
      ...prev,
      birthDate: {
        ...prev.birthDate,
        [name]: value,
      },
    }));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewUser((prev) => ({
      ...prev,
      birthDate: {
        ...prev.birthDate,
        [name]: value,
      },
    }));
  };

  const mutation = useMutation({
    mutationFn: (email) => {
      return axios.post("http://localhost:3000/api/v1/auth/send_otp_email", {
        user: { email },
      });
    },
    onSuccess: ({ data }) => {
      console.log(data);
      setStep((p) => p + 1);
    },
  });

  const handleClick = () => {
    mutation.mutate(newUser.email);
  };
  console.log(newUser);

  return (
    <div className="flex flex-col items-center h-full">
      <img
        aria-label="Birthday cupcake"
        src="src/assets/birthday_cake.png"
        className="w-[144px] h-[96px]"
      />
      <Typography cs="text-[14px] font-semibold mt-[16px] mb-[8px]">
        Add Your Birthday
      </Typography>
      <Typography cs="text-[14px] leading-[18px]">
        This won&apos;t be a part of your public profile.
      </Typography>
      <Typography cs="text-[14px] text-[#0095f6]">
        Why do I need to provide my birthday?
      </Typography>
      <div className="flex mt-4">
        <span className="mr-[8px] mb-[8px]">
          <select
            name="month"
            onChange={chooseMonth}
            className="text-[#737373] border border-[#dbdbdb] text-[12px] h-[36px] bg-white p-[0px_24px_0px_8px] rounded-[3px]"
          >
            {months.map(({ name }, i) => (
              <option
                selected={new Date().getMonth() === i ? true : false}
                key={name}
                value={i}
              >
                {name}
              </option>
            ))}
          </select>
        </span>
        <span className="mr-[8px] mb-[8px]">
          <select
            name="day"
            onChange={handleChange}
            className="text-[#737373] border border-[#dbdbdb] text-[12px] h-[36px] bg-white p-[0px_24px_0px_8px] rounded-[3px]"
          >
            {generateDays(month).map((d) => (
              <option
                selected={new Date().getDate() === d ? true : false}
                key={d}
                value={d}
              >
                {d}
              </option>
            ))}
          </select>
        </span>
        <span className="mr-[8px] mb-[8px]">
          <select
            name="year"
            onChange={handleChange}
            className="text-[#737373] border border-[#dbdbdb] text-[12px] h-[36px] bg-white p-[0px_24px_0px_8px] rounded-[3px]"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </span>
      </div>
      <Typography cs="font-normal text-[12px] text-[#737373]">
        You need to enter the date you were born
      </Typography>
      <Typography cs="text-center font-normal text-[12px] text-[#737373] mt-5 leading-[16px]">
        Use your own birthday, even if this account is for business, a pet, or
        something else.
      </Typography>
      <div
        onClick={handleClick}
        className="bg-[rgb(0,149,246)] text-white font-semibold px-[16px] py-[7px] rounded-[8px] w-full text-[14px] mt-4"
        type="click"
      >
        Next
      </div>
      <button
        onClick={() => setStep((p) => p - 1)}
        type="click"
        className="text-[rgb(0,149,246)] font-semibold text-[14px] mt-4"
      >
        Go back
      </button>
    </div>
  );
};

export default BirthDateRegistration;
