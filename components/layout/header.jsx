/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/title";
import Search from "../ui/search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const router = useRouter();

  console.log(router.asPath);

  return (
    <div
      className={`h-[8rem] z-50 relative mt-[.001rem] ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="flex items-center justify-between container mx-auto h-full w-full">
        <div>
          <Title addClass="text-[3.2rem] text-white"><Link href="/">Bayatı96</Link></Title>
        </div>
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-20 md:gap-y-0 gap-y-10 sm:flex-row flex-col items-center">
            <li className="text-[1.6rem] font-sans hover:text-primary">
              <Link
                href="/"
              >
                Home
              </Link>
            </li>

            <li className="text-[1.6rem] font-sans hover:text-primary">
              <Link
                href="/menu"
              >
                Menu
              </Link>
            </li>

            <li className="text-[1.6rem] font-sans hover:text-primary">
              <Link
                href="/booking"
              >
                Rezervasiya
              </Link>
            </li>

            <li className="text-[1.6rem] font-sans hover:text-primary">
              <Link
                href="/comment"
              >
                Rəylər
              </Link>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex items-center gap-x-5">
          <Link href="/auth/login">
            <FaUser className="text-[2rem] text-white hover:text-primary" />
          </Link>
          <a href="#">
            <FaShoppingCart className="text-[2rem] text-white hover:text-primary" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="text-[2rem] text-white hover:text-primary" />
          </button>

          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-[2.4rem] text-white hover:text-primary transition-all" />
          </button>
        </div>
      </div>

      <div>
        {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
      </div>
    </div>
  );
};

export default header;
