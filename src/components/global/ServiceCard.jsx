import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ bgImage, tagImage, title, content, btnName, link }) => {
  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.4, delay: 0.25 }}
        className="rounded-[30px] bg-color-lightBlue w-full h-full"
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      >
        {/* <img
                  src={bgImage}
                  className="absolute rounded-[30px]"
                /> */}
        <div className="relative px-[10%]">
          <div className="flex justify-end p-2 ">
            <img
              src={tagImage}
              className="object-cover rounded-full w-[150px] h-[150px]"
            />
          </div>
          <h2 className="poppinsSemiBold text-white h6 mb-4 lg:-mt-10">
            {title}
          </h2>
          <p className="poppinsRegular text-white text-sm">{content}</p>
          <a href={link} className="text-left mt-5 lg:mt-20">
            <button className="poppinsSemiBold py-2 px-8 m-5 flex bg-color-darkBlue text-white rounded-[30px]">
              {btnName}
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
