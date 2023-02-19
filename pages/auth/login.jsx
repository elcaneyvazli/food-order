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
      type: "password",
      placeholder: "Password",
    },
  ];

  return (
    <div className="container mx-auto w-[50%] mt-[5rem]">
      <div className="flex flex-col w-[50%] mx-auto">
        <Title addClass="text-[4rem] text-center pb-[2rem]">Login</Title>
        <Input inputs={inputs} />
        <button className="btn my-[3rem] text-[1.6rem]">Register</button>
        <Link href="/auth/register">
          <p className="text-[1.4rem] underline cursor-pointer text-secondary text-center mb-[2.4rem]">
            Do you no have a account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default login;
