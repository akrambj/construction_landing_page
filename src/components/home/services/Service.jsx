import { useState } from "react";
import PopUp from "./PopUp";

const Service = ({ service, openPopUpHandler }) => {
  return (
    <div
      onClick={openPopUpHandler}
      className="service flex flex-col gap-5 justify-between py-5 bg-white rounded-[30px] px-5 drop-shadow-2xl shadow-md w-[20%] cursor-pointer hover:bg-green-primary hover:text-white duration-300 "
    >
      <div className=" w-full h-[60%]">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover rounded-[30px]"
        />
      </div>
      <div className=" h-[40%] text-center flex flex-col gap-2">
        <h4 className="font-bold text-xl">{service.title}</h4>
        <p className="text-[10px]">{service.desc}</p>
        <button className="service-btn text-green-primary font-bold border-b-2 border-black w-[130px] mx-auto">
          EN SAVOIR PLUS{" "}
        </button>
      </div>
    </div>
  );
};

export default Service;
