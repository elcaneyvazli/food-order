import React from "react";
import Input from "../ui/input";
import Title from "../ui/title";

const booking = () => {

  const inputs = [
    {
      "id":1,
      "type":"text",
      "placeholder":"Name",
    },
    {
      "id":2,
      "type":"text",
      "placeholder":"Phone Number",
    },
    {
      "id":3,
      "type":"text",
      "placeholder":"Email",
    },
    {
      "id":4,
      "type":"number",
      "placeholder":"How many person",
    },
    {
      "id":5,
      "type":"datetime-local",
      "placeholder":"",
    },
  ]

  return (
    <div className="container mx-auto ">
      <Title addClass="text-[4rem]">Book A Table</Title>
      <div className="flex flex-wrap-reverse items-center justify-between gap-x-10 mt-[3rem]">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col">
            <Input inputs={inputs}/>
          </div>
        </div>
        <div className="lg:flex-1 w-full !h-[37rem] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.3067758891243!2d49.63587105849327!3d40.57092726460419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40309740dbafb065%3A0x3860c7ff6139f2fc!2zQXrJmXJiYXljYW4gQmF5cmHEn8Sx!5e0!3m2!1str!2s!4v1665942995791!5m2!1str!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
      <button className="btn my-[3rem] text-[1.6rem]">BOOK NOW</button>
    </div>
  );
};

export default booking;
