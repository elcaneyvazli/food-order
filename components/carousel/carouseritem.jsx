import React from "react";
import Image from "next/image";

const carouseritem = ({imgSrc}) => {
  return (
    <div className="mx-[2rem]">
      <div className="flex flex-col gap-y-5">
        <div className="bg-secondary p-6 text-white rounded-xl mb-[1rem]">  
          <p className="text-[1.5rem] pb-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            mollitia aut necessitatibus enim quisquam tempore nulla ducimus
            corrupti perferendis aliquid sint dolores error, nihil quae,
            veritatis earum veniam.
          </p>
          <div>
            <p className="text-[1.8rem] text-bold pb-[.1rem]">Mooana Michell</p>
            <p className="text-[1.5rem]">magna aliqua</p>
          </div>
        </div>
        <div className="relative h-[12rem] w-[12rem] border-[.4rem] rounded-full border-primary before:contents-[''] before:top-0 flex justify-center before:absolute before:w-[2rem] before:h-[2rem] before:bg-primary before:-translate-y-[1.2rem] before:rotate-45">
        <Image
            src={imgSrc}
            alt=""
            layout="fill"
            className="rounded-full"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default carouseritem;
