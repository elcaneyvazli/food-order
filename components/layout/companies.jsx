import React from "react";
import Title from "../ui/title";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const companies = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
        <div className="relative md:w-[17.6rem] md:h-[17.6rem] w-[14.4rem] h-[14.4rem] after:content-['']   border-[.5rem] border-primary rounded-full overflow-hidden">
          <Image
            src="/images/o1.jpg"
            alt=""
            layout="fill"
            className="hover:scale-105 transition-all"
            objectFit="cover"
          />
        </div>

        <div className="text-white">
          <Title addClass="text-[2.4rem]">Tasty Thursdays</Title>
          <div className="flex gap-x-5 items-center">
            <Title addClass="text-[4rem]">20%</Title>
            <Title addClass="text-[2.4rem]">off</Title>
          </div>
          <button className="btn flex items-center gap-x-2 text-[1.6rem]">
            Order Now <FaShoppingCart size={20} />
          </button>
        </div>
      </div>
      <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
        <div className="relative md:w-[17.6rem] md:h-[17.6rem] w-[14.4rem] h-[14.4rem] after:content-['']   border-[.5rem] border-primary rounded-full overflow-hidden">
        <Image
            src="/images/o2.jpg"
            alt=""
            layout="fill"
            className="hover:scale-105 transition-all"
            objectFit="cover"
          />
        </div>

        <div className="text-white">
          <Title addClass="text-[2.4rem]">Pizza Days</Title>
          <div className="flex gap-x-5 items-center">
            <Title addClass="text-[4rem]">15%</Title>
            <Title addClass="text-[2.4rem]">off</Title>
          </div>
          <button className="btn flex items-center gap-x-2 text-[1.6rem]">
            Order Now <FaShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default companies;
