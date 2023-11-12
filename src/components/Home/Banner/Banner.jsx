import React from "react";
import bannerImg from "../../../assets/banner/bannerImg.png";

const Banner = () => {
  return (
    <div className=" bg-[#07332F] h-[700px] ">
      <div className="max-w-screen-2xl mx-auto lg:px-20">
        <div className="flex flex-col sm:flex-row pt-5 sm:pt-40">
          {/* 1st div */}
          <div className="text-white text-center sm:text-left">
            <h2 className="text-2xl font-bold sm:text-5xl sm:font-bold">
              Your Best Medical
            </h2>
            <h2 className="text-2xl font-bold sm:text-5xl sm:font-bold leading-[50px] sm:leading-[100px]">
              Help Center
            </h2>
            <p className="text-sm sm:text-xl px-5 sm:px-0">
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been the industry’s stardard.
            </p>
            <button className="bg-[#F7A582] btn mt-4 mb-20">All Service</button>
          </div>
          {/* 2nd div */}
          <div className="sm:-mt-20">
            <img
              className="w-full h-full px-4"
              src={bannerImg}
              alt="doctor banner Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
