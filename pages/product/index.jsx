import React from "react";
import Image from "next/image";
import Title from "../../components/ui/title";

function index() {

  return (
    <div className="container mx-auto mb-[20rem]">
      <div className="flex flex-row items-center justify-between h-screen flex-wrap">
        <div className="relative md:flex-1 w-[80%] h-[30%] md:h-[80%] mx-20">
          <Image
            src="/images/pizza3.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
          
        </div>
        <div className="flex-1 md:text-left text-center">
          <Title addClass="text-[4rem]">Good Pizza</Title>
          <h4 className="text-primary text-[2.4rem] underline">$13</h4>
          <p className="text-[1.6rem] my-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
            molestiae.
          </p>
          <h2 className="font-bold text-[2.4rem]">Choose the size</h2>
          <div className="flex flex-row gap-x-5 items-center">
            <div className="relative w-[8rem] h-[8rem]">
              <Image
                src="/images/pizza3.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
              <span className="absolute top-0 right-0 rounded-[2.4rem] bg-primary px-3 py-1">
                Small
              </span>
            </div>

            <div className="relative w-[10rem] h-[10rem]">
              <Image
                src="/images/pizza3.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
              <span className="absolute top-0 right-0 rounded-[2.4rem] bg-primary px-3 py-1">
                Medium
              </span>
            </div>

            <div className="relative w-[12rem] h-[12rem]">
              <Image
                src="/images/pizza3.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
              <span className="absolute top-0 right-0 rounded-[2.4rem] bg-primary mt-[1rem] mr-[1rem] px-3 py-1">
                Large
              </span>
            </div>
          </div>
          <h2 className="font-bold text-[2.4rem]">Choose additional ingredients</h2>
          <div className="flex gap-x-4 my-6 md:justify-start justify-center">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-[1.6rem] font-semibold">ketchup</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-[1.6rem] font-semibold">mayonnaise</span>
          </label>
        </div>
        <button className="btn text-[1.4rem]">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default index;
