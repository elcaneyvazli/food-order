import Link from "next/link";
import React from "react";
import Input from "../../components/ui/input";
import Title from "../../components/ui/title";

const login = () => {
  const inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "Full Name",
    },
    {
      id: 2,
      type: "number",
      placeholder: "Phone Number",
    },
    {
      id: 3,
      type: "password",
      placeholder: "Password",
    },
    {
      id: 4,
      type: "password",
      placeholder: "Password Again",
    },
  ];

  return (
    <div className="container mx-auto w-[50%] mt-[5rem]">
      <div className="flex flex-col w-[50%] mx-auto">
        <Title addClass="text-[4rem] text-center pb-[2rem]">Login</Title>
        <Input inputs={inputs} />
        <button className="btn my-[3rem] text-[1.6rem]">Login</button>
        <Link href="/auth/login">
          <p className="text-[1.4rem] underline cursor-pointer text-secondary text-center mb-[2.4rem]">
            Do you have a account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default login;
