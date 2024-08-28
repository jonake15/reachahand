import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="w-full p-10 rounded-[30px] shadow-lg">
      <img src={image} alt="post" className="w-full object-contain" />
      <div>
        <h2 className="poppinsSemiBold text-left leading-normal text-xl">
          Reflecting on 35, a journey of Gratitude, Growth and Impact
        </h2>
        <h3 className="poppinsRegular text-gray-600 text-left leading-normal text-xl">
          Each of RAHU's program, campaign and projects are tailored <br /> to
          impact nuggets of information
        </h3>
      </div>
    </div>
  );
};

export default ImageCard;
