/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Image from 'next/image';
import OutsideClickHandler from "react-outside-click-handler";
import Title from './title';
import { GiCancel } from "react-icons/gi";

const search = ({setIsSearchModal}) => {
  return (
    <div className="fixed w-screen h-screen z-50 top-0 left-0 after: content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60  grid place-content-center">
    <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="relative z-50 md:w-[60rem] w-[37rem] bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[4rem] text-black text-center">Search</Title>
            <input type="text" placeholder='Search...' className="border w-full h-[5rem] my-10"/>
            <ul>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/food1.png" alt="" width={48} height={48} />
                </div>
                <span className="font-bold text-black text-[1.6rem]">Good Pizza</span>
                <span className="font-bold text-black text-[1.6rem]">$10</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/food1.png" alt="" width={48} height={48} />
                </div>
                <span className="font-bold text-black text-[1.6rem]">Good Pizza</span>
                <span className="font-bold text-black text-[1.6rem]">$10</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/food1.png" alt="" width={48} height={48} />
                </div>
                <span className="font-bold text-black text-[1.6rem]">Good Pizza</span>
                <span className="font-bold text-black text-[1.6rem]">$10</span>
              </li>
            </ul>

            <button
              className="absolute top-4 right-4"
              onClick={() => setIsSearchModal(false)}
            >
              <GiCancel size={25} className="text-black hover:text-primary transition-all" />
            </button>
        </div>
    </OutsideClickHandler>
    </div>
  )
}

export default search