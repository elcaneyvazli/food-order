import React from "react";
import Title from "../ui/title";
import Items from "./menuitem";

const menuwrapper = () => {
  const menus = [
    {
      id: 1,
      imgurl: "/images/f1.png",
      name: "Deliciouse Pizza",
      about:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,magnam voluptatem repellendus sed eaque",
      price: "$20",
    },
    {
      id: 2,
      imgurl: "/images/f3.png",
      name: "Deliciouse Pizza",
      about:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,magnam voluptatem repellendus sed eaque",
      price: "$20",
    },
    {
      id: 3,
      imgurl: "/images/f6.png",
      name: "Deliciouse Pizza",
      about:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,magnam voluptatem repellendus sed eaque",
      price: "$20",
    },
    {
      id: 4,
      imgurl: "/images/f7.png",
      name: "Deliciouse Pizza",
      about:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,magnam voluptatem repellendus sed eaque",
      price: "$20",
    },
    {
      id: 5,
      imgurl: "/images/f8.png",
      name: "Deliciouse Pizza",
      about:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,magnam voluptatem repellendus sed eaque",
      price: "$20",
    },
    {
      id: 6,
      imgurl: "/images/f9.png",
      name: "Deliciouse Pizza",
      about:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,magnam voluptatem repellendus sed eaque",
      price: "$20",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-y-5">
        <Title addClass="text-[4rem]">Our Menu</Title>
        <div className="flex flex-row items-center justify-between text-[2rem]">
          <button className="px-6 py-2 bg-secondary rounded-[2.4rem] text-white">
            All
          </button>
          <button className="px-6 py-2 rounded-3xl">Burger</button>
          <button className="px-6 py-2 rounded-3xl">Pizza</button>
          <button className="px-6 py-2 rounded-3xl">Drinks</button>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <Items menus={menus} />
      </div>
      <div className="grid place-content-center">
        <button className="btn text-[2rem] mt-[2rem] mb-[10rem]">
          View More
        </button>
      </div>
    </div>
  );
};

export default menuwrapper;
