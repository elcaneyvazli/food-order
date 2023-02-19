import React from "react";
import Carouseritem from "./carouseritem";
import Tittle from "../ui/title";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const carouserwrapper = () => {
    function NextBtn({ onClick }) {
        return (
          <button
            className="absolute -bottom-[4.8rem] left-1/2 bg-primary flex items-center justify-center w-[4rem] h-[4rem] rounded-full text-white"
            onClick={onClick}
          >
            <IoIosArrowForward className="text-[2rem]" />
          </button>
        );
      }
    
      function PrevBtn({ onClick }) {
        return (
          <button
            className="absolute -bottom-[4.8rem] right-1/2 bg-primary flex items-center justify-center w-[4rem] h-[4rem] rounded-full text-white mr-2"
            onClick={onClick}
          >
            <IoIosArrowBack className="text-[2rem]"/>
          </button>
        );
      }
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

  return (
    <div className="container mx-auto mt-[5rem] mb-[10rem]">
      <Tittle addClass="text-[4rem] text-center">
        What Says Our Customers
      </Tittle>
      <Slider {...settings}>
        <Carouseritem imgSrc='/images/client1.jpg'/>
        <Carouseritem imgSrc='/images/client2.jpg'/>
        <Carouseritem imgSrc='/images/client1.jpg'/>
        <Carouseritem imgSrc='/images/client2.jpg'/>
      </Slider>
    </div>
  );
};

export default carouserwrapper;
