/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Title from "../ui/title";
import Slider from "react-slick";

const home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image src="/images/bg.jpg" alt="" layout="fill" objectFit="cover" />
        </div>
      </div>

      <Slider {...settings}>
        <div>
          <div className="mt-[20rem]  text-white flex flex-col items-start gap-y-10">
          <Title addClass="text-[6rem]">Fast Food Restaurant</Title>
          <p className="text-[1.6rem] sm:w-2/5 w-full">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <button className="btn text-[2rem]">Order Now</button>
        </div>
        </div>

        <div>
          <div className="mt-[20rem]  text-white flex flex-col items-start gap-y-10">
          <Title addClass="text-[6rem]">Fast Food Restaurant</Title>
          <p className="text-[1.6rem] sm:w-2/5 w-full">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <button className="btn text-[2rem]">Order Now</button>
        </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default home;
