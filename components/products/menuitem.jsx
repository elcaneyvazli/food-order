import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const menuitem = (props) => {
  console.log(props.menus);
  return (
    <>
      {props.menus.map((menu) =>(
      <div className="bg-secondary rounded-3xl" key={menu.id}>
      <div className="w-full h-[21rem] bg-[#f1f2f3] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
        <div className="relative w-[15rem] h-[15rem] hover:scale-110 transition-all">
          <Image src={menu.imgurl} alt="" layout="fill" objectFit="contain"/>
        </div>
      </div>
      <div className="p-[2.5rem] text-white">
      <h4 className="text-[2rem] font-semibold">{menu.name}</h4>
        <p className="text-[1.4rem]">
          {menu.about}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[1.4rem]">{menu.price}</span>
          <button className="btn">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
    ))}
    </>
      
  );
};

export default menuitem;
