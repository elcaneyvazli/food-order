import React from "react";
import Title from "../ui/title";
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col py-[1rem]">
          <div className="flex flex-row flex-wrap items-center justify-center md:justify-between gap-y-6 md:gap-y-0">
          <div className="md:flex-1">
            <div className="flex flex-col items-center">
                <Title addClass="text-[2.8rem] pb-[1rem]">Contact Us</Title>
                <div className="flex items-center text-[1.6rem] pb-[1rem]">
                    <GoLocation/>
                    <p className="pl-[1rem]">Location</p>
                </div>
                <div className="flex items-center text-[1.6rem]">
                    <FaPhoneAlt/>
                    <p className="pl-[1rem]">Call +994513910242</p>
                </div>
            </div>
          </div>
          <div className="md:flex-1">
            <div className="flex flex-col items-center justify-center">
                <Title addClass="text-[2.8rem] pb-[1rem]">Bayatı96</Title>
                <p className="text-[1.6rem]">Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                <div className="flex flex-row items-center mt-[2rem]">
                    <FaInstagram className="text-[2rem] ml-[1rem]"/>
                    <FaFacebook className="text-[2rem] ml-[1rem]"/>
                    <FaTwitter className="text-[2rem] ml-[1rem]"/>
                </div>
            </div>
          </div>
          <div className="md:flex-1">
            <div className="flex flex-col items-center justify-center">
                <Title addClass="text-[2.8rem] pb-[1rem]">Open Hours</Title>
                <p className="text-[1.6rem]">Everyday</p>
                <p className="text-[1.6rem]">10.00 Am -10.00 Pm</p>
            </div>
          </div>
          </div>
          <div className="text-[1.6rem] text-center mt-[3rem]">
            © 2022 All Rights Reserved By ElcanEyvazlı
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
